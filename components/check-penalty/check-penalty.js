import {LitElement, html, css} from 'lit';
import {armor, armorSlug} from '../../utilities/armor.js';

export class CheckPenalty extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
      }
      .wrapper {
        border-radius: 5px;
        border: 1px black solid;
        display: flex;
        justify-content: space-between;
        min-height: 25px;
        font-family: var(
          --primary-font,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Helvetica,
          Arial,
          sans-serif,
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        );
        font-size: 1rem;
        align-items: center;
        padding: 0px 10px;
      }
    `;
  }

  static get properties() {
    return {
      armor: {type: String, reflect: true},
      shield: {type: Boolean, reflect: true},
      checked: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.armor = null;
    this.shield = false;
    this.checked = false;
  }

  onChange() {
    this.checked = !this.checked;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {checked: this.checked, penalty: this.checkPenalty},
      })
    );
  }

  get checkPenalty() {
    let penalty = armor.get(armorSlug(this.armor || ''))?.checkPenalty || 0;
    if (this.shield) penalty = penalty - 1;
    return penalty;
  }

  render() {
    return html`
      <div part="wrapper" class="wrapper">
        <label class="label" part="label" for="check-penalty"
          >Check Penalty (${this.checkPenalty})</label
        >
        <input
          type="checkbox"
          id="check-penalty"
          name="check-penalty"
          .checked="${this.checked}"
          @change="${this.onChange}"
        />
      </div>
    `;
  }
}

window.customElements.define('check-penalty', CheckPenalty);
