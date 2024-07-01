import {LitElement, html, css} from 'lit';
import '@digital-dcc/stat-display';

class DiceRoll {
  name;
  description;
  armor;
  shield;
  luck;
  qty;
  die;
  mod;
}

const fumbleDie = new Map([
  ['Unarmored', 4],
  ['Padded', 8],
  ['Leather', 8],
  ['Studded leather', 8],
  ['Hide', 12],
  ['Scale mail', 12],
  ['Chainmail', 12],
  ['Banded mail', 16],
  ['Half-plate', 16],
  ['Full plate', 16],
  ['Shield', 8],
]);

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class FumbleButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
      }
    `;
  }

  static get properties() {
    return {
      armor: {type: String},
      luck: {type: Number},
      shield: {type: Boolean},
      dieOverride: {attribute: 'die-override', type: String},
      modifierOverride: {attribute: 'modifier-override', type: String},
    };
  }

  constructor() {
    super();
    this.armor = 'Unarmored';
    this.luck = null;
    this.shield = false;
    this.dieOverride = null;
    this.modifierOverride = null;
  }

  render() {
    return html`
      <stat-display
        name="Fumble"
        modifier="d"
        value="${this._fumbleDie}"
        suffix="${this._modifier}"
        clickable
        @value-clicked="${this._onClick}"
      ></stat-display>
    `;
  }

  get _fumbleDie() {
    if (this.dieOverride) return Number(this.dieOverride.replace('d', ''));
    const armorDie = fumbleDie.get(this.armor) || 4;
    const shieldDie = fumbleDie.get('shield') || 8;
    if (this.shield && armorDie < shieldDie) {
      return shieldDie;
    }
    return armorDie;
  }

  get _modifier() {
    let mod = this._modifierFor(this.luck) * -1;
    if (this.modifierOverride) mod = Number(this.modifierOverride);
    if (mod < 0) return mod;
    if (mod === 0) return '';
    return `+${mod}`;
  }

  _onClick() {
    const roll = new DiceRoll();
    roll.name = 'Fumble Roll';
    roll.description = 'A fumble roll was made';
    roll.armor = this.armor;
    roll.luck = this.luck;
    roll.shield = this.shield;
    roll.qty = 1;
    roll.die = `d${fumbleDie.get(this.armor) || 4}`;
    roll.mod = this._modifier;

    this.dispatchEvent(
      new CustomEvent('fumble-roll', {
        detail: roll,
      })
    );
  }

  _modifierFor(stat) {
    if (stat <= 3) return -3;
    if (stat >= 4 && stat <= 5) return -2;
    if (stat >= 6 && stat <= 8) return -1;
    if (stat >= 9 && stat <= 12) return 0;
    if (stat >= 13 && stat <= 15) return +1;
    if (stat >= 16 && stat <= 17) return +2;
    if (stat >= 18) return +3;
    return 0;
  }
}

window.customElements.define('fumble-button', FumbleButton);
