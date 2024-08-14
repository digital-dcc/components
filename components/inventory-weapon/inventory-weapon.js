import {LitElement, html, css} from 'lit';
import {weaponStatsFor} from '../../utilities/weapons.js';

export class InventoryWeapon extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 0px;
        padding: 0px;
        display: table-row;
        border-bottom: 1px black dotted;
        width: 100%;
      }

      .td {
        margin: 0px;
        padding: 0px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
      }
      .td.first {
        text-align: left;
      }
      .td.last {
        text-align: right;
      }
			.buttons {
				display: flex;
				justify-content: right;
				gap: 10px;
			}
      button {
        border: none;
        margin: 0px;
        padding: 0px;
        background: none;
        cursor: pointer;
      }
      .equip-button {
      }
      .delete-button {
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: #00ff00;
        text-align: center;
        justify-items: center;
        font-size: 0.8rem;
        line-height: 0.8rem;
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

  onDelete() {
    this.dispatchEvent(
      new CustomEvent('delete', {
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
      <div class="td first name">${this.name}</div>
      <div class="td damage">${stats?.damage}</div>
      <div class="td range">${range || '-'}</div>
      <div class="td cost">${stats?.cost}gp</div>
      <div class="td last">
        <div class="buttons">
          <button class="equip-button" @click=${this.onTogglEquip}>
            ${this.equipped ? 'unequip' : 'equip'}
          </button>
          <button class="delete-button" @click=${this.onDelete}>x</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define('inventory-weapon', InventoryWeapon);
