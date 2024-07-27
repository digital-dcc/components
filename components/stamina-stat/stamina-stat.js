import {LitElement, html, css} from 'lit';
import {modifierFor} from '../../utilities/modifier-for.js';
import {diceChain} from '../../utilities/dice-chain.js';
import {armor, armorSlug} from '../../utilities/armor.js';
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
  maxStamina;
  stamina;
  luck;
  applyCheckPenalty;
  applyLuckModifier;
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class StaminaStat extends LitElement {
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
      maxStamina: {attribute: 'max-stamina', type: Number},
      stamina: {type: Number},
      luck: {type: Number},
      dieAdjustment: {attribute: 'die-adjustment', type: Number},
      modifierAdjustment: {attribute: 'modifier-adjustment', type: Number},
      dieOverride: {attribute: 'die-override', type: Number},
      modifierOverride: {attribute: 'modifier-override', type: Number},
      armor: {type: String},
      shield: {type: Boolean},
      applyCheckPenalty: {attribute: 'apply-check-penalty', type: Boolean},
      applyLuckModifier: {attribute: 'apply-luck-modifier', type: Boolean},
    };
  }

  constructor() {
    super();
    this.maxStamina = null;
    this.stamina = null;
    this.luck = null;
    this.dieAdjustment = 0;
    this.dieOverride = null;
    this.modifierAdjustment = 0;
    this.modifierOverride = null;
    this.armor = null;
    this.shield = null;
    this.applyCheckPenalty = false;
    this.applyLuckModifier = false;
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
    let mod = modifierFor(this.stamina || this.maxStamina);
    mod = mod + this.modifierAdjustment;
    if (this.applyCheckPenalty) mod = mod + this.checkPenalty;
    if (this.applyLuckModifier) mod = mod + modifierFor(this.luck);
    return mod;
  }

  get checkPenalty() {
    let penalty = armor.get(armorSlug(this.armor || ''))?.checkPenalty || 0;
    if (this.shield) penalty = penalty - 1;
    return penalty;
  }

  get displayStamina() {
    if (this.maxStamina === this.stamina || this.stamina === null) {
      return this.maxStamina;
    }
    return `${this.stamina}/${this.maxStamina}`;
  }

  render() {
    return html`
      <stat-display
        name="Sta"
        value="${this.formatModifier(this.modifier)}"
        base="${this.displayStamina}"
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
    roll.name = 'Stamina Roll';
    roll.description = 'A stamina roll was made';
    roll.multiplier = 1;
    roll.die = this.die;
    roll.modifier = this.modifier;
    roll.dieAdjustment = this.dieAdjustment;
    roll.modifierAdjustment = this.modifierAdjustment;
    roll.checkPenalty = this.checkPenalty;
    roll.maxStamina = this.maxStamina;
    roll.stamina = this.stamina;
    roll.luck = this.luck;
    roll.applyLuckModifier = this.applyLuckModifier;
    roll.applyCheckPenalty = this.applyCheckPenalty;

    this.dispatchEvent(
      new CustomEvent('stamina-skill-check', {
        detail: roll,
      })
    );
  }
}

window.customElements.define('stamina-stat', StaminaStat);