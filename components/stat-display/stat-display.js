import {LitElement, html, css} from 'lit';

export class StatDisplay extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
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
      }
      .wrapper {
        position: relative;
        border: 1px black solid;
        width: fit-content;
        aspect-ratio: 1 / 1;
        padding: 5px;
        border-radius: 10px;
        min-width: 60px;
        max-width: min-content;
        display: flex;
        flex-direction: column;
      }
      h1 {
        margin: 0 auto;
        width: max-content;
        font-size: 1rem;
        flex: 0.6;
      }
			button {
				margin: 0 auto;
				display: block;
				border: 0;
				background-color: unset;
				width: 100%;
			}
      button.value-button {
        flex: 1.4;
        font-size: 1.7rem;
				border-radius: 5px 5px 0 0;
      }
      button.with-base {
        flex: 0;
      }
			button.base-button {
				border-radius: 0 0 5px 5px;	
				padding-top: 5px; 
				text-align: center;
				
			}
			button.no-bottom-text.without-base {
				border-radius: 5px;
			}
      .clickable:hover {
        background-color: rgba(211, 211, 211, 0.5);
      }
      .clickable {
        cursor: pointer;
      }
      .clickable:active {
        transform: translateY(1px);
      }
      .base {
        
        
        border-top: 1px black solid;
        
        
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      value: {type: String},
      modifier: {type: String},
      suffix: {type: String},
      textPosition: {type: String, attribute: 'text-position'},
      valueClickable: {attribute: 'value-clickable', type: Boolean},
      baseClickable: {attribute: 'base-clickable', type: Boolean},
      base: {type: String},
    };
  }

  constructor() {
    super();
    this.name = '';
    this.value = '';
    this.modifier = '';
    this.suffix = '';
    this.textPosition = 'top';
    this.valueClickable = false;
    this.baseClickable = false;
    this.base = null;
  }

  render() {
    return html`
      <div class="wrapper" part="wrapper">
        ${this.textPosition !== 'bottom'
          ? html`<h1 part="name">${this.name}</h1>`
          : html``}
        <button
          @click=${this._onClick}
          part="value"
          class="value-button ${this.valueClickable ? 'clickable' : ''} ${this.base
            ? 'with-base'
            : 'without-base'} ${this.textPosition !== 'bottom' ? 'no-bottom-text' : ''}"
        >
          ${this.value}
        </button>
        ${this.textPosition === 'bottom'
          ? html`<h1 part="name">${this.name}</h1>`
          : html``}
        ${this.base ? this._displayBase() : html``}
      </div>
    `;
  }

  _displayBase() {
    return html`
      <div class="base">
        <button
          @click=${this._onClick}
          part="base"
          class="base-button ${this.baseClickable ? 'clickable' : ''}"
        >
          ${this.base}
        </button>
      </div>
    `;
  }

  _onClick() {
    this.dispatchEvent(new CustomEvent('value-clicked'));
  }
}

window.customElements.define('stat-display', StatDisplay);
