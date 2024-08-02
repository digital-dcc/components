import {LitElement, html, css} from 'lit';
import {modifierFor} from '../../utilities/modifier-for.js';
import {diceChain} from '../../utilities/dice-chain.js';
import {checkPenaltyFor} from '../../utilities/armor.js';
import {formatModifier} from '../../utilities/format-modifier.js';
import '../stat-display/stat-display.js';

class DiceRoll {
  name;
  description;
  roll = {
    qty: 1,
    die: 20,
    modifier: {
      breakdown: [],
      total: 0,
    },
  };
  maxPersonality;
  personality;
  luck;
}

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class PersonalityStat extends LitElement {
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
      maxPersonality: {attribute: 'max-personality', type: Number},
      personality: {type: Number},
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
    this.maxPersonality = null;
    this.personality = null;
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
    if (this.modifierOverride) {
      return {
        breakdown: [{name: 'Modifier Override', value: this.modifierOverride}],
        total: this.modifierOverride,
      };
    }
    const personalityModifier = modifierFor(
      this.personality || this.maxPersonality
    );
    const adjustment = this.modifierAdjustment;
    const breakdown = [
      {name: 'Personality Modifier', value: personalityModifier},
      {name: 'Modifier Adjustment', value: adjustment},
    ];
    let checkPenalty = 0;
    if (this.applyCheckPenalty) {
      checkPenalty = checkPenaltyFor(this.armor, this.shield);
      breakdown.push({name: 'Check Penalty', value: checkPenalty});
    }
    let luckModifier = 0;
    if (this.applyLuckModifier) {
      luckModifier = modifierFor(this.luck);
      breakdown.push({name: 'Luck Modifier', value: luckModifier});
    }
    return {
      breakdown,
      total: personalityModifier + adjustment + checkPenalty + luckModifier,
    };
  }

  get displayPersonality() {
    if (
      this.maxPersonality === this.personality ||
      this.personality === null
    ) {
      return this.maxPersonality;
    }
    return `${this.personality}/${this.maxPersonality}`;
  }

  render() {
    return html`
      <stat-display
        name="Per"
        value="${formatModifier(this.modifier.total)}"
        base="${this.displayPersonality}"
        value-clickable
        @value-clicked="${this.onClick}"
      ></stat-display>
    `;
  }

  onClick() {
    const roll = new DiceRoll();
    roll.name = 'Skill Check';
    roll.description = 'Personality skill check roll';
    roll.roll.qty = 1;
    roll.roll.die = this.die;
    // @ts-ignore
    roll.roll.modifier = this.modifier;
    roll.maxPersonality = this.maxPersonality;
    roll.personality = this.personality;
    roll.luck = this.luck;

    this.dispatchEvent(
      new CustomEvent('personality-skill-check', {
        detail: roll,
      })
    );
  }
}

window.customElements.define('personality-stat', PersonalityStat);
