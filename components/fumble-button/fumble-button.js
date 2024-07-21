import {LitElement, html, css} from 'lit';
import '@digital-dcc/stat-display';

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
      luckySign: {attribute: 'lucky-sign', type: String},
      shield: {type: Boolean},
      multiplierOverride: {attribute: 'multiplier-override', type: Number},
      dieOverride: {attribute: 'die-override', type: Number},
      modifierOverride: {attribute: 'modifier-override', type: Number},
    };
  }

  constructor() {
    super();
    this.armor = 'Unarmored';
    this.luck = null;
    this.luckySign = null;
    this.shield = false;
    this.multiplierOverride = null;
    this.dieOverride = null;
    this.modifierOverride = null;
  }

  render() {
    return html`
      <stat-display
        name="Fumble"
        modifier="${this.multiplier}d"
        value="${this.fumbleDie}"
        suffix="${this.formatModifier(this.modifier)}"
        clickable
        @value-clicked="${this.onClick}"
      ></stat-display>
    `;
  }

	get multiplier() {
    if (this.multiplierOverride) return Number(this.multiplierOverride);
    return 1;
  }

	get luckySignSlug() {
    if (
      this.luckySign &&
      this.luckySign
        .toLowerCase()
        .replaceAll(' ', '-')
        .replace(/['´]/g, '')
        .startsWith('the-broken-star')
    ) {
      return 'the-broken-star';
    }
    return '';
  }

  get fumbleDie() {
    if (this.dieOverride) return Number(this.dieOverride.replace('d', ''));
    const armorDie = fumbleDie.get(this.armor) || 4;
    const shieldDie = fumbleDie.get('shield') || 8;
    if (this.shield && armorDie < shieldDie) {
      return shieldDie;
    }
    return armorDie;
  }

  get modifier() {
		// inverse luck affects fumbles
    let mod = this.modifierFor(this.luck) * -1;

		// The broken star lucky sign, doubles the luck modifier effect on fumbles
		if (this.luckySignSlug === 'the-broken-star') {
      mod = mod * 2;
    }
    if (this.modifierOverride) mod = Number(this.modifierOverride);
    return mod;
  }

	formatModifier(mod) {
    if (mod < 0) return String(mod);
    if (mod === 0) return '';
    return `+${mod}`;
  }

  onClick() {
    const roll = new DiceRoll();
    roll.name = 'Fumble Roll';
    roll.description = 'A fumble roll was made';
    roll.armor = this.armor;
    roll.luck = this.luck;
    roll.luckySign = this.luckySignSlug;
    roll.shield = this.shield;
    roll.multiplier = 1;
    roll.die = fumbleDie.get(this.armor) || 4;
    roll.modifier = this.modifier;

    this.dispatchEvent(
      new CustomEvent('fumble-roll', {
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

window.customElements.define('fumble-button', FumbleButton);
