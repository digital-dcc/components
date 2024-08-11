import {LitElement, html, css} from 'lit';

const alignmentMap = new Map([
  ['law', 'Lawful'],
  ['lawful', 'Lawful'],
  ['neutral', 'Neutral'],
  ['chaos', 'Chaotic'],
  ['chaotic', 'Chaotic'],
]);

export class AlignmentDisplay extends LitElement {
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
        flex-direction: column;
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
        min-width: fit-content;
        max-width: 120px;
        padding: 10px 0px;
      }
      h2 {
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
      }
      .alignment-name {
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      alignment: {type: String},
    };
  }

  constructor() {
    super();
    this.alignment = null;
  }

  get alignmentText() {
    return alignmentMap.get(this.alignment.toLowerCase());
  }

  render() {
    return html`
      <div part="wrapper" class="wrapper">
        <h2 class="alignment-name" part="alignment-name">
          ${this.alignmentText}
        </h2>
      </div>
    `;
  }
}

window.customElements.define('alignment-display', AlignmentDisplay);
