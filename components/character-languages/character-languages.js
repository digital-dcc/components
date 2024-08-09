import {LitElement, html, css} from 'lit';

export class CharacterLanguages extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0;
        margin: 0;
      }
      h2 {
        margin: 0;
        padding: 0;
        font-size: 0.8em;
        text-align: center;
        margin-bottom: 10px;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 1rem;
      }
      .wrapper {
        border-radius: 5px;
        padding: 10px;
        border: 1px black solid;
        margin-bottom: 10px;
				list-style-type: none;
      }
			ul {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}
			::slotted(*) {
				display: list-item;
			}
    `;
  }

	firstUpdated() {
    const slot = this.shadowRoot?.querySelector('slot');
    slot?.addEventListener('slotchange', () => {
      this._interleaveCommas();
    });
  }

  _interleaveCommas() {
    const slot = this.shadowRoot?.querySelector('slot');
    const nodes = slot?.assignedNodes({ flatten: true }).filter(node => node.nodeType === Node.ELEMENT_NODE);
    const fragment = document.createDocumentFragment();

    nodes?.forEach((node, index) => {
      fragment.appendChild(node.cloneNode(true));
      if (index < nodes.length - 1) {
				const el = document.createElement('span');
				el.style.marginRight = '5px';
				el.innerText = ',';
				fragment.appendChild(el);
      }
    });

    // Clear the slot's original content and append the new content
    // @ts-ignore
    slot?.assignedNodes().forEach(node => node?.remove());
    this.shadowRoot?.querySelector('ul')?.appendChild(fragment);
  }

  render() {
    return html`
      <div part="wrapper" class="wrapper">
        <h2>Languages</h2>
        <ul><slot></slot></ul>
      </div>
    `;
  }
}

window.customElements.define('character-languages', CharacterLanguages);
