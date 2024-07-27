import {LitElement, html, css} from 'lit';
import {modifierFor} from '../../utilities/modifier-for.js';
import {occupations} from '../../utilities/occupations.js';
import {slug} from '../../utilities/slug.js';
import '../stat-display/stat-display.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class SpeedDisplay extends LitElement {
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
      occupation: {type: String},
      birthAugur: {attribute: 'birth-augur', type: String},
      startingLuck: {attribute: 'starting-luck', type: Number},
      speedAdjustment: {attribute: 'speed-adjustment', type: Number},
      speedOverride: {attribute: 'speed-override', type: Number},
    };
  }

  constructor() {
    super();
    this.occupation = null;
    this.birthAugur = null;
    this.startingLuck = null;
    this.speedAdjustment = 0;
    this.speedOverride = null;
  }

  get speed() {
    if (this.speedOverride) return this.speedOverride;
    const occupation = occupations.get(slug(this.occupation || ''));
    let baseSpeed = 30;
    if (['dwarf', 'halfling'].includes(occupation?.race || '')) baseSpeed = 20;

    // The wild child birth augur conveys 5' more/less movement per point of starting luck modifier
    let luckAdjustment = 0;
    if (slug(this.birthAugur || '') === 'wild-child') {
      luckAdjustment = modifierFor(this.startingLuck) * 5;
    }

    return baseSpeed + luckAdjustment + this.speedAdjustment;
  }

  render() {
    return html`
      <stat-display name="Speed" value="${String(this.speed)}"></stat-display>
    `;
  }
}

window.customElements.define('speed-display', SpeedDisplay);
