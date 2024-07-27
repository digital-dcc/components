import {LitElement, html, css} from 'lit';
import {levelForXp, xpForNextLevel} from '../../utilities/levels.js';
import '../stat-display/stat-display.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class ExperiencePoints extends LitElement {
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
      xp: {attribute: 'xp', type: Number},
    };
  }

  constructor() {
    super();
    this.xp = null;
  }

  render() {
    const currentLevel = levelForXp(this.xp);
    const requiredXP = xpForNextLevel(currentLevel);
    return html`
      <stat-display
        name="Level"
        value="${String(currentLevel)}"
        base="${this.xp}/${requiredXP}"
      ></stat-display>
    `;
  }
}

window.customElements.define('experience-points', ExperiencePoints);
