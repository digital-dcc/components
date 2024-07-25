import {LitElement, html, css} from 'lit';
import '../stat-display/stat-display.js';

class DiceRoll {
  name;
  description;
  armor;
  shield;
  luck;
  luckySign;
  multiplier;
  die;
  modifier;
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
      adjustment: {type: Number},
      override: {type: Number},
      checkPenalty: {attribute: 'check-penalty', type: Number},
    };
  }

  constructor() {
    super();
    this.strength = null;
		this.adjustment = 0;
		this.override = null;
		this.checkPenalty = 0;
  }

  render() {
		let modifier = this.modifierFor(this.strength);
		modifier = modifier + this.checkPenalty;
    return html`
      <stat-display
        name="Str"
        value="${modifier >= 0 ? `+${modifier}` : modifier}"
				base="${this.strength}"
        value-clickable
        @value-clicked="${this.onClick}"
      ></stat-display>
    `;
  }

  // get luckySignSlug() {
  //   if (
  //     this.luckySign &&
  //     this.luckySign
  //       .toLowerCase()
  //       .replaceAll(' ', '-')
  //       .replace(/['´]/g, '')
  //       .startsWith('the-broken-star')
  //   ) {
  //     return 'the-broken-star';
  //   }
  //   return '';
  // }

  

  // get modifier() {
  //   // inverse luck affects fumbles
  //   let mod = this.modifierFor(this.luck) * -1;

  //   // The broken star lucky sign, doubles the luck modifier effect on fumbles
  //   if (this.luckySignSlug === 'the-broken-star') {
  //     mod = mod * 2;
  //   }
  //   if (this.modifierOverride) mod = Number(this.modifierOverride);
  //   return mod;
  // }

  formatModifier(mod) {
    if (mod < 0) return String(mod);
    return `+${mod}`;
  }

  onClick() {
    const roll = new DiceRoll();
    roll.name = 'Fumble Roll';
    roll.description = 'A fumble roll was made';
    // roll.armor = this.armor;
    // roll.luck = this.luck;
    // roll.luckySign = this.luckySignSlug;
    // roll.shield = this.shield;
    // roll.multiplier = 1;
    // roll.die = fumbleDie.get(this.armor) || 4;
    // roll.modifier = this.modifier;

    this.dispatchEvent(
      new CustomEvent('strength-roll', {
        detail: roll,
      })
    );
  }

  modifierFor(stat) {
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

window.customElements.define('strength-stat', StrengthStat);
