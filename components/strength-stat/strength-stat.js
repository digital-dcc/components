import {LitElement, html, css} from 'lit';
import {modifierFor} from '../../utilities/modifier-for.js';
import {diceChain} from '../../utilities/dice-chain.js';
import '../stat-display/stat-display.js';

class DiceRoll {
  name;
  description;
  multiplier;
  die;
  modifier;
  checkPenalty;
  dieAdjustment;
  modifierAdjustment;
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class StrengthStat extends LitElement {
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
      strength: {type: Number},
      dieAdjustment: {attribute: 'die-adjustment', type: Number},
      modifierAdjustment: {attribute: 'modifier-adjustment', type: Number},
      dieOverride: {attribute: 'die-override', type: Number},
      modifierOverride: {attribute: 'modifier-override', type: Number},
      checkPenalty: {attribute: 'check-penalty', type: Number},
    };
  }

  constructor() {
    super();
    this.strength = null;
    this.dieAdjustment = 0;
    this.dieOverride = null;
    this.modifierAdjustment = 0;
    this.modifierOverride = null;
    this.checkPenalty = 0;
  }

  get die() {
    if (this.dieOverride) return this.dieOverride;
    // adjust the die up or down the dice chain
    const die = diceChain[diceChain.indexOf('d20') + this.dieAdjustment];
    // ensure adjustment doesnt take the index out of bounds
    if (!die) return 20;
    return Number(die.split('d')[1]);
  }

  get modifier() {
    if (this.modifierOverride) return this.modifierOverride;
    const modifier = modifierFor(this.strength);
    return modifier + this.modifierAdjustment + this.checkPenalty;
  }

  render() {
    return html`
      <stat-display
        name="Str"
        value="${this.formatModifier(this.modifier)}"
        base="${this.strength}"
        value-clickable
        @value-clicked="${this.onClick}"
      ></stat-display>
    `;
  }

  formatModifier(mod) {
    if (mod < 0) return String(mod);
    return `+${mod}`;
  }

  onClick() {
    const roll = new DiceRoll();
    roll.name = 'Strength Roll';
    roll.description = 'A strength roll was made';
    roll.multiplier = 1;
    roll.die = this.die;
    roll.modifier = this.modifier;
    roll.dieAdjustment = this.dieAdjustment;
    roll.modifierAdjustment = this.modifierAdjustment;
    roll.checkPenalty = this.checkPenalty;

    this.dispatchEvent(
      new CustomEvent('strength-roll', {
        detail: roll,
      })
    );
  }
}

window.customElements.define('strength-stat', StrengthStat);
