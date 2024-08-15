import {LitElement, html, css} from 'lit';

export class InventoryPanel extends LitElement {
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
        flex-direction: column;
        border: 1px black solid;
        border-radius: 5px;
        margin: 0px;
        padding: 0 0 30px 0;
        min-height: 300px;
      }
      h2 {
        margin: 10px 0;
        padding: 0px;
        text-align: center;
        font-size: 0.8rem;
      }
      .tabs {
        display: flex;
        cursor: pointer;
      }
      .tab {
        padding: 10px 0;
        background-color: #f1f1f1;
        border: 1px solid #ccc;
        min-width: 100px;
        text-align: center;
        border-radius: 5px 5px 0 0;
      }
      .pre-tab,
      .post-tab {
        border-bottom: 1px dotted #ccc;
        width: 50%;
        display: flex;
        justify-content: right;
        align-items: center;
        padding-right: 10px;
      }
      .pre-tab {
        width: 50%;
      }
      .spacer-tab {
        border-bottom: 1px dotted #ccc;
        padding: 2px;
      }
      .tab[selected] {
        background-color: #fff;
        border-bottom: 1px solid #fff;
      }
      .table-header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px black dotted;
        padding: 15px 10px;
        margin: 0;
        justify-items: center;
      }
      .name {
        font-weight: bold;
        width: 100px;
        display: flex;
        align-items: center;
      }
      .damage {
        font-weight: bold;
        width: 40px;
        justify-content: center;
        display: flex;
        align-items: center;
      }
      .range {
        font-weight: bold;
        width: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .ac-bonus {
        font-weight: bold;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .check-penalty {
        font-weight: bold;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .speed {
        font-weight: bold;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .fumble-die {
        font-weight: bold;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .quantity {
        font-weight: bold;
        min-width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
      .table-filler {
        width: 100px;
      }
      .add-button {
        border: none;
        border-radius: 100%;
        width: 25px;
        height: 25px;
        background-color: #f2f2f2;
        text-align: center;
        justify-items: center;
        font-size: 0.8rem;
        line-height: 0.8rem;
        cursor: pointer;
      }
      .add-button:hover {
        background-color: #c3c3c3;
      }

      /* Responsive styling */
      @media (max-width: 600px) {
        .tab {
          padding: 8px 10px; /* Reduce padding for smaller screens */
          font-size: 1rem; /* Reduce font size */
        }
        .tabs {
          flex-direction: column; /* Stack tabs vertically on small screens */
        }
        .tab {
          margin-right: 0;
          border-bottom: none;
          border-left: none;
          border-right: none;
        }
        .tab[selected] {
          border-bottom: none;
          border-left: none;
          border-right: none;
        }
        .pre-tab,
        .post-tab,
        .spacer-tab {
          display: none;
        }
      }
    `;
  }

  static get properties() {
    return {
      selected: {type: Number, state: true},
    };
  }

  constructor() {
    super();
    this.selected = 0;
  }

  selectTab(index) {
    this.selected = index;
  }

  get type() {
    switch (this.selected) {
      case 0:
        return 'weapon';
      case 1:
        return 'ammunition';
      case 2:
        return 'armor';
      case 3:
        return 'equipment';
      case 4:
        return 'mount-gear';
    }
    return 'weapon';
  }

  onAdd() {
    this.dispatchEvent(
      new CustomEvent('add-item', {
        detail: {
          type: this.type,
        },
      })
    );
  }

  render() {
    return html`
      <div class="wrapper" part="wrapper">
        <h2>Inventory</h2>
        <div class="tabs">
          <div class="pre-tab"></div>
          <div
            class="tab first"
            ?selected=${this.selected === 0}
            @click=${() => this.selectTab(0)}
          >
            Weapons
          </div>
          <div class="spacer-tab"></div>
          <div
            class="tab"
            ?selected=${this.selected === 1}
            @click=${() => this.selectTab(1)}
          >
            Ammunition
          </div>
          <div class="spacer-tab"></div>
          <div
            class="tab"
            ?selected=${this.selected === 2}
            @click=${() => this.selectTab(2)}
          >
            Armor
          </div>
          <div class="spacer-tab"></div>
          <div
            class="tab"
            ?selected=${this.selected === 3}
            @click=${() => this.selectTab(3)}
          >
            Equipment
          </div>
          <div class="spacer-tab"></div>
          <div
            class="tab last"
            ?selected=${this.selected === 4}
            @click=${() => this.selectTab(4)}
          >
            Mount Gear
          </div>
          <div class="post-tab">
            <button class="add-button" @click=${this.onAdd}>+</button>
          </div>
        </div>
        ${this.selected === 0
          ? html` <div class="table-header">
                <div class="name">Name</div>
                <div class="damage">Damage</div>
                <div class="range">Range</div>
                <div class="table-filler"></div>
              </div>
              <slot name="weapon"></slot>`
          : html``}
        ${this.selected === 1
          ? html` <div class="table-header">
                <div class="name">Name</div>
                <div class="quantity">Quantity</div>
                <div class="table-filler"></div>
              </div>
              <slot name="ammunition"></slot>`
          : html``}
        ${this.selected === 2
          ? html` <div class="table-header">
                <div class="name">Name</div>
                <div class="ac-bonus">Bonus</div>
                <div class="check-penalty">Check</div>
                <div class="speed">Speed</div>
                <div class="fumble-die">Fumble</div>
                <div class="table-filler"></div>
              </div>
              <slot name="armor"></slot>`
          : html``}
        ${this.selected === 3
          ? html` <div class="table-header">
                <div class="name">Name</div>
                <div class="quantity">Quantity</div>
                <div class="table-filler"></div>
              </div>
              <slot name="equipment"></slot>`
          : html``}
        ${this.selected === 4
          ? html` <div class="table-header">
                <div class="name">Name</div>
                <div class="quantity">Quantity</div>
                <div class="table-filler"></div>
              </div>
              <slot name="mount-gear"></slot>`
          : html``}
      </div>
    `;
  }
}

window.customElements.define('inventory-panel', InventoryPanel);
