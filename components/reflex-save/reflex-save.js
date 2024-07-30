import {LitElement, html, css} from 'lit';
import {modifierFor} from '../../utilities/modifier-for.js';
import { slug } from '../../utilities/slug.js';
import { characterClasses } from '../../utilities/character-classes.js';
import { formatModifier } from '../../utilities/format-modifier.js';
import '../stat-display/stat-display.js';

export class DiceRoll {
  type = 'saving-throw';
  name = 'Reflex Saving Throw';
  description = 'A reflex saving throw was made';

  // roll details
  roll = {
    // number of dice to roll
    qty: 1,
    // number of die sides
    die: 20,
    // any modifier to the die roll
    mod: +0,
  };

	agility;
	birthAugur;
	startingLuck;
	characterClass;
	level = 0;
	adjustment = 0;
	override = false;
}

// @ts-ignore
export class ReflexSave extends LitElement {
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
      agility: {type: Number},
			birthAugur: {attribute: 'birth-augur', type: String},
      startingLuck: {attribute: 'starting-luck', type: Number},
			characterClass: {attribute: 'character-class', type: String},
      level: {type: Number},
      adjustment: {type: Number},
      override: {type: Number},
    };
  }

  constructor() {
    super();
    this.agility = null;
		this.birthAugur = null;
    this.startingLuck = null;
    this.characterClass = null;
    this.level = 0;
    this.adjustment = 0;
    this.override = null;
  }

  render() {
    return html`
      <stat-display text-position="bottom" name="Ref" value="${formatModifier(this.reflexSave)}" value-clickable @value-clicked="${this.valueClicked}"></stat-display>
    `;
  }

	valueClicked() {
		const roll = new DiceRoll();
		roll.roll.mod = this.reflexSave;
		roll.agility = this.agility;
		roll.birthAugur = slug(this.birthAugur);
		roll.startingLuck = this.startingLuck;
		roll.characterClass = slug(this.characterClass);
		roll.level = this.level || 0;
		roll.adjustment = this.adjustment || 0;
		roll.override = !!this.override;
		this.dispatchEvent(new CustomEvent('reflex-saving-throw', {detail: roll}));
	}

  get reflexSave() {
		if (this.override) return this.override;
		const agilityBonus = modifierFor(this.agility) || 0;
		let characterClassBonus = 0;
		if (this.characterClass && characterClasses.get(slug(this.characterClass))) {
			characterClassBonus = characterClasses.get(slug(this.characterClass))?.get(Number(this.level))?.ref || 0;
		}
		let luckAdjustment = 0;
		// we also need a way to account for the birth augur 'guardian-angel' that affects saving throws but on when escaping traps
		// we could add some sort of checkbox for this or we could just use the adjustment
		if (['lucky-sign', 'struck-by-lightning'].includes(slug(this.birthAugur || ''))) {
			luckAdjustment = modifierFor(this.startingLuck) || 0;
		}
		return agilityBonus + characterClassBonus + luckAdjustment + this.adjustment;
  }
}

window.customElements.define('reflex-save', ReflexSave);
