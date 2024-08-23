import {LitElement, html, css} from 'lit';
import {diceChain} from '../../utilities/dice-chain.js';
import {formatModifier} from '../../utilities/format-modifier.js';
import '../modal-dialog/modal-dialog.js';

class DiceRollResult {
  #diceRolls = [];
  #modifier = 0;
  name = '';
  description = '';

  addRoll(roll) {
    this.#diceRolls.push(roll);
  }

  set modifier(modifier) {
    this.#modifier = modifier;
  }

  get modifier() {
    return this.#modifier;
  }

  get rolls() {
    return this.#diceRolls.map((roll) => roll.roll);
  }

  get diceRollTotal() {
    let total = 0;
    for (const roll of this.#diceRolls) {
      total += roll.roll;
    }
    return total;
  }

  get total() {
    return this.diceRollTotal + this.#modifier;
  }
}

export class DiceRoller extends LitElement {
  static styles = css`
    :host {
      font-family: var(
        --primary-font,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Helvetica,
        Arial,
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol'
      );
    }
    h1,
    .roll-description {
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .roll-description {
      margin-bottom: 15px;
    }
    .roll-adjustment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      border-top: 1px dashed #f2f2f2;
      padding-top: 10px;
    }
    @media (max-width: 400px) {
      .roll-adjustment-section {
        flex-direction: column;
      }
    }
    .roll-adjustment-section {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .roll-adjustment button {
      width: 30px;
      height: 30px;
      padding: 0;
      margin: 0;
      border: none;
      background-color: #f2f2f2;
      border-radius: 25%;
      cursor: pointer;
    }
    .roll-button {
      width: 100%;
      padding: 10px;
      background-color: #f2f2f2;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .value {
      text-align: center;
    }
    .qty-value {
      width: 10px;
    }
    .die-value {
      width: 25px;
    }
    .modifier-value {
      width: 20px;
    }
    .roll-result h2,
    .roll-result p {
      text-align: center;
    }
    .modifier-breakdown {
      padding: 10px 0;
      margin: 0;
      border-top: 1px dashed #f2f2f2;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .modifier-breakdown-entry {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;
    }
  `;

  static properties = {
    diceRoll: {attribute: false, type: Object},
    open: {type: Boolean, state: true},
    qtyAdjustment: {type: Number, state: true},
    dieAdjustment: {type: Number, state: true},
    modifierAdjustment: {type: Number, state: true},
    rollResult: {type: Number, state: true},
  };

  constructor() {
    super();
    this.diceRoll = null;
    this.open = false;
    this.qtyAdjustment = 0;
    this.dieAdjustment = 0;
    this.modifierAdjustment = 0;
    this.rollResult = null;
  }

  updated() {
    if (this.diceRoll) {
      this.open = true;
    }
  }

  get qty() {
    return this.diceRoll?.roll?.qty + this.qtyAdjustment;
  }

  get die() {
    const index =
      diceChain.indexOf(`d${this.diceRoll?.roll?.die}`) + this.dieAdjustment;
    return diceChain[index];
  }

  get modifier() {
    return this.diceRoll?.roll?.modifier?.total + this.modifierAdjustment;
  }

  get modifierBreakdown() {
    return this.diceRoll?.roll?.modifier?.breakdown
      ?.filter(({value}) => value > 0 || value < 0)
      ?.map(({name, value}) => {
        return html`<li class="modifier-breakdown-entry">
          <span>${name}</span><span>${formatModifier(value)}</span>
        </li>`;
      });
  }

  incrementQuantity() {
    this.qtyAdjustment++;
  }

  decrementQuantity() {
    if (this.qty === 1) return;
    this.qtyAdjustment--;
  }

  get highestDie() {
    return diceChain[diceChain.length - 1];
  }

  get lowestDie() {
    return diceChain[0];
  }

  incrementDie() {
    if (this.die === this.highestDie) return;
    this.dieAdjustment++;
  }

  decrementDie() {
    if (this.die === this.lowestDie) return;
    this.dieAdjustment--;
  }

  incrementModifier() {
    this.modifierAdjustment++;
  }

  decrementModifier() {
    this.modifierAdjustment--;
  }

  roll() {
    const rollResult = new DiceRollResult();
    rollResult.name = this.diceRoll?.name;
    rollResult.description = this.diceRoll?.description;
    rollResult.modifier = this.modifier;
    const qty = this.qty || 1;
    const die = this.die?.split('d')[1] || 20;

    for (let i = 0; i < qty; i++) {
      const roll = Math.floor(Math.random() * Number(die)) + 1;
      rollResult.addRoll({die, roll});
    }

    this.rollResult = rollResult;

    this.dispatchEvent(
      new CustomEvent('dice-roll-result', {
        detail: rollResult,
      })
    );
  }

  onClose() {
    // this.open = false;
    this.rollResult = null;
    this.diceRoll = null;
    this.dispatchEvent(new CustomEvent('close'));
  }

  render() {
    return html`
      <modal-dialog .open="${this.open}" @close="${this.onClose}">
        <h1>${this.diceRoll?.name}</h1>
        <p class="roll-description">${this.diceRoll?.description}</p>
        ${this.modifierBreakdown?.length
          ? html`<ul class="modifier-breakdown">
              ${this.modifierBreakdown}
            </ul>`
          : html``}
        <div class="roll-adjustment">
          <div class="roll-adjustment-section">
            <button @click="${this.decrementQuantity}">-</button>
            <div class="value qty-value">${this.qty}</div>
            <button @click="${this.incrementQuantity}">+</button>
          </div>
          <div class="roll-adjustment-section">
            <button @click="${this.decrementDie}">-</button>
            <div class="value die-value">${this.die}</div>
            <button @click="${this.incrementDie}">+</button>
          </div>
          <div class="roll-adjustment-section">
            <button @click="${this.decrementModifier}">-</button>
            <div class="value modifier-value">
              ${formatModifier(this.modifier)}
            </div>
            <button @click="${this.incrementModifier}">+</button>
          </div>
        </div>
        <div>
          <button class="roll-button" @click="${this.roll}">Roll</button>
        </div>
        <div class="roll-result">
          ${this.rollResult
            ? html`<div>
                <h2>Result</h2>
                <p>
                  [${this.rollResult.rolls.join(', ')}]
                  ${formatModifier(this.rollResult.modifier)} =
                  ${this.rollResult.total}
                </p>
              </div>`
            : html``}
        </div>
      </modal-dialog>
    `;
  }
}

window.customElements.define('dice-roller', DiceRoller);
