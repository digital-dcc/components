import {LitElement, html, css} from 'lit';
import {equipmentStatsFor} from '../../utilities/equipment.js';

export class InventoryEquipment extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
        margin: 0px;
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
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px black dotted;
        padding-bottom: 10px;
        margin-bottom: 10px;
        justify-items: center;
      }
      button {
        border: none;
        margin: 0px;
        padding: 0px;
        background: none;
        cursor: pointer;
      }
      .equip-button {
        padding: 5px;
        border-radius: 5px;
      }
      .equip-button:hover {
        background-color: #f2f2f2;
      }
      .remove-button,
      .quantity-adjustment-button {
        background-color: #f2f2f2;
        text-align: center;
        justify-items: center;
        font-size: 0.8rem;
        line-height: 0.8rem;
      }
      .remove-button {
        border-radius: 100%;
        width: 25px;
        height: 25px;
      }
      .quantity-adjustment-button {
        border-radius: 5px;
        width: 40px;
        height: 25px;
      }
      .remove-button:hover {
        background-color: #c3c3c3;
      }
      .name {
        width: 130px;
        display: flex;
        align-items: center;
      }
      .quantity {
        min-width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .buttons {
        width: 100px;
        display: flex;
        justify-content: right;
        align-items: center;
        gap: 10px;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      quantity: {type: Number, reflect: true},
    };
  }

  constructor() {
    super();
    this.name = null;
    this.quantity = 1;
  }

  onRemove() {
    this.dispatchEvent(
      new CustomEvent('remove', {
        detail: {
          name: this.name,
        },
      })
    );
  }

  incrementQuantity(amount) {
    return () => {
      this.quantity += amount;
      this.dispatchEvent(
        new CustomEvent('quantity-change', {
          detail: {
            name: this.name,
            quantity: this.quantity,
          },
        })
      );
    };
  }

  decrementQuantity(amount) {
    return () => {
      this.quantity -= amount;
      if (this.quantity < 0) {
        this.quantity = 0;
      }
      this.dispatchEvent(
        new CustomEvent('quantity-change', {
          detail: {
            name: this.name,
            quantity: this.quantity,
          },
        })
      );
    };
  }

  render() {
    const stats = equipmentStatsFor(this.name);
    return html`
      <div class="wrapper" part="wrapper">
        <div class="name">${stats?.name}</div>
        <div class="quantity">
          <button
            class="quantity-adjustment-button decrement"
            @click="${this.decrementQuantity(1)}"
          >
            -1
          </button>
          ${this.quantity}
          <button
            class="quantity-adjustment-button increment"
            @click="${this.incrementQuantity(1)}"
          >
            +1
          </button>
        </div>
        <div class="buttons">
          <button class="remove-button" @click=${this.onRemove}>x</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('inventory-equipment', InventoryEquipment);
