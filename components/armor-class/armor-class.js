import {LitElement, html, css} from 'lit';
import {armor, armorSlug} from '../../utilities/armor';
import {modifierFor} from '../../utilities/modifier-for';
import '@digital-dcc/stat-display';

// @ts-ignore
export class ArmorClass extends LitElement {
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
      agility: {type: Number},
      adjustment: {type: Number},
      shield: {type: Boolean},
      override: {type: Number},
    };
  }

  constructor() {
    super();
    this.armor = '(Unarmored)';
    this.agility = null;
    this.adjustment = 0;
    this.shield = false;
    this.override = null;
  }

  render() {
    return html`
      <stat-display name="AC" value="${this.armorClass}"></stat-display>
    `;
  }

  get armorClass() {
    const armorBonus = armor.get(armorSlug(this.armor) || '')?.bonus || 0;
    const baseAC = 10;
    const agilityModifier = modifierFor(this.agility);
    const shieldValue = this.shield ? 1 : 0;
    return this.override
      ? this.override
      : baseAC + this.adjustment + agilityModifier + armorBonus + shieldValue;
  }
}

window.customElements.define('armor-class', ArmorClass);
