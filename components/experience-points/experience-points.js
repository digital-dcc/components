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
      ::part(value) {
        font-size: 1.2em;
      }
      ::part(name) {
        font-size: 0.8em;
      }
			.wrapper {
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				aspect-ratio: 1 / 1;
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
      <div class="wrapper">
        <stat-display
          name="XP"
          value="${this.xp}/${requiredXP}"
        ></stat-display>
      </div>
    `;
  }
}

window.customElements.define('experience-points', ExperiencePoints);
