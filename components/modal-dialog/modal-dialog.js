import {LitElement, html, css} from 'lit';

export class ModalDialog extends LitElement {
  static styles = css`
    dialog {
      border: 1px #f2f2f2 solid;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      padding: 16px;
    }
  `;

  static properties = {
    open: {type: Boolean, reflect: true},
  };

  constructor() {
    super();
    this.open = false;
  }

  render() {
    return html`
      <dialog @click="${this._stopPropagation}">
        <slot></slot>
      </dialog>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('open')) {
      const dialog = this.shadowRoot?.querySelector('dialog');
      if (this.open) {
        dialog?.showModal();
      } else {
        dialog?.close();
      }
    }
  }

  _close() {
    this.open = false;
  }

  _stopPropagation(event) {
    event.stopPropagation();
  }
}

window.customElements.define('modal-dialog', ModalDialog);
