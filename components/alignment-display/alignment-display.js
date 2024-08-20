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
      .wrapper {
        border-radius: 5px;
        border: 1px black solid;
        display: flex;
        flex-direction: column;
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
        padding: 5px;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
      }
      h2 {
        margin: 0;
        padding: 0;
        font-size: 0.8rem;
      }
      .title {
        text-align: center;
      }
      .alignment-name-wrapper {
        display: flex;
        flex-direction: column;
      }
      .alignment-name {
        margin-top: 15px;
        font-size: 1rem;
        text-align: center;
        align-items: center;
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
        <h2 class="title" part="title">Alignment</h2>
        <div class="alignment-name-wrapper">
          <div class="alignment-name">${this.alignmentText}</div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('alignment-display', AlignmentDisplay);
