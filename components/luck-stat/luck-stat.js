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
  maxLuck;
  luck;
  applyCheckPenalty;
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class LuckStat extends LitElement {
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
      maxLuck: {attribute: 'max-luck', type: Number},
      luck: {type: Number},
      dieAdjustment: {attribute: 'die-adjustment', type: Number},
      modifierAdjustment: {attribute: 'modifier-adjustment', type: Number},
      dieOverride: {attribute: 'die-override', type: Number},
      modifierOverride: {attribute: 'modifier-override', type: Number},
      armor: {type: String},
      shield: {type: Boolean},
      applyCheckPenalty: {attribute: 'apply-check-penalty', type: Boolean},
    };
  }

  constructor() {
    super();
    this.maxLuck = null;
    this.luck = null;
    this.dieAdjustment = 0;
    this.dieOverride = null;
    this.modifierAdjustment = 0;
    this.modifierOverride = null;
    this.armor = null;
    this.shield = null;
    this.applyCheckPenalty = false;
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
    let mod = modifierFor(this.luck || this.maxLuck);
    mod = mod + this.modifierAdjustment;
    if (this.applyCheckPenalty) mod = mod + this.checkPenalty;
    return mod;
  }

  get checkPenalty() {
    let penalty = armor.get(armorSlug(this.armor || ''))?.checkPenalty || 0;
    if (this.shield) penalty = penalty - 1;
    return penalty;
  }

  get displayLuck() {
    if (this.maxLuck === this.luck || this.luck === null) {
      return this.maxLuck;
    }
    return `${this.luck}/${this.maxLuck}`;
  }

  render() {
    return html`
      <stat-display
        name="Luck"
        value="${this.displayLuck}"
        base="${this.formatModifier(this.modifier)}"
        value-clickable
        base-clickable
        @base-clicked="${this.onLuckModifierClick}"
        @value-clicked="${this.onLuckScoreClick}"
      ></stat-display>
    `;
  }

  formatModifier(mod) {
    if (mod < 0) return String(mod);
    return `+${mod}`;
  }

  onLuckModifierClick() {
    const roll = new DiceRoll();
    roll.name = 'Luck Skill Check';
    roll.description = 'A luck skill check roll was made';
    roll.multiplier = 1;
    roll.die = this.die;
    roll.modifier = this.modifier;
    roll.dieAdjustment = this.dieAdjustment;
    roll.modifierAdjustment = this.modifierAdjustment;
    roll.checkPenalty = this.checkPenalty;
    roll.maxLuck = this.maxLuck;
    roll.luck = this.luck;
    roll.applyCheckPenalty = this.applyCheckPenalty;

    this.dispatchEvent(
      new CustomEvent('luck-skill-check', {
        detail: roll,
      })
    );
  }

  onLuckScoreClick() {
    const roll = new DiceRoll();
    roll.name = 'Luck Check';
    roll.description = 'A luck check roll was made';
    roll.multiplier = 1;
    roll.die = 20;
    roll.maxLuck = this.maxLuck;
    roll.luck = this.luck;

    this.dispatchEvent(
      new CustomEvent('luck-check', {
        detail: roll,
      })
    );
  }
}

window.customElements.define('luck-stat', LuckStat);
