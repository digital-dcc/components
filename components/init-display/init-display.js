import {LitElement, html, css} from 'lit';
import {modifierFor} from '../../utilities/modifier-for.js';
import {formatModifier} from '../../utilities/format-modifier.js';
import {slug} from '../../utilities/slug.js';
import '../stat-display/stat-display.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class InitDisplay extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      ::part(value) {
        font-size: 1.2em;
      }
      ::part(name) {
        font-size: 0.8em;
      }
    `;
  }

  static get properties() {
    return {
      characterClass: {attribute: 'character-class', type: String},
      characterLevel: {attribute: 'character-level', type: Number},
      agility: {type: Number},
      birthAugur: {attribute: 'birth-augur', type: String},
      startingLuck: {attribute: 'starting-luck', type: Number},
      initAdjustment: {attribute: 'init-adjustment', type: Number},
      initOverride: {attribute: 'init-override', type: Number},
    };
  }

  constructor() {
    super();
    this.characterClass = null;
    this.characterLevel = 0;
    this.agility = null;
    this.birthAugur = null;
    this.startingLuck = null;
    this.initAdjustment = 0;
    this.initOverride = null;
  }

  get init() {
    if (this.initOverride) return this.initOverride;
    // Some character classes get to add their level to their init
    let classInit = 0;
    if (slug(this.characterClass || '') === 'warrior') {
      classInit = this.characterLevel;
    }

    // Agility modifier always modifies init
    let agilityInit = 0;
    if (this.agility) {
      agilityInit = modifierFor(this.agility);
    }

    // The speed-of-the-cobra birth augur increases or reduces init per point of starting luck modifier
    let luckAdjustment = 0;
    if (slug(this.birthAugur || '') === 'speed-of-the-cobra') {
      luckAdjustment = modifierFor(this.startingLuck);
    }

    return classInit + agilityInit + luckAdjustment + this.initAdjustment;
  }

  render() {
    return html`
      <stat-display
        name="Init"
        value="${formatModifier(this.init)}"
      ></stat-display>
    `;
  }
}

window.customElements.define('init-display', InitDisplay);
