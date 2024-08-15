import {LitElement, html, css} from 'lit';
import {weaponStatsFor} from '../../utilities/weapons.js';

export class InventoryWeapon extends LitElement {
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
        padding: 15px 10px;
        margin: 0;
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
      .remove-button {
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: #f2f2f2;
        text-align: center;
        justify-items: center;
        font-size: 0.8rem;
        line-height: 0.8rem;
      }
      .remove-button:hover {
        background-color: #c3c3c3;
      }
      .name {
        width: 100px;
        display: flex;
        align-items: center;
      }
      .damage {
        width: 40px;
        justify-content: center;
        display: flex;
        align-items: center;
      }
      .range {
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
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
      equipped: {type: Boolean, reflect: true},
    };
  }

  constructor() {
    super();
    this.name = null;
    this.equipped = false;
  }

  onTogglEquip() {
    this.equipped = !this.equipped;
    this.dispatchEvent(
      new CustomEvent(this.equipped ? 'equip' : 'unequip', {
        detail: {
          name: this.name,
        },
      })
    );
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

  render() {
    const stats = weaponStatsFor(this.name);
    let range = '';
    if (stats?.range) {
      range = `${stats.range.short}/${stats.range.medium}/${stats.range.long}`;
    }
    return html`
      <div class="wrapper" part="wrapper">
        <div class="name">${this.name}</div>
        <div class="damage">${stats?.damage}</div>
        <div class="range">${range || '-'}</div>
        <div class="buttons">
          <button class="equip-button" @click=${this.onTogglEquip}>
            ${this.equipped ? 'unequip' : 'equip'}
          </button>
          <button class="remove-button" @click=${this.onRemove}>x</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('inventory-weapon', InventoryWeapon);
