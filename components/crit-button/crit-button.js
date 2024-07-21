import {LitElement, html, css} from 'lit';
import '@digital-dcc/stat-display';

class DiceRoll {
  name;
  description;
  luck;
  luckySign;
  multiplier;
  die;
  modifier;
  table;
}

const classInfo = {
  warrior: {
    1: {multiplier: 1, die: 12, table: 'III'},
    2: {multiplier: 1, die: 14, table: 'III'},
    3: {multiplier: 1, die: 16, table: 'IV'},
    4: {multiplier: 1, die: 20, table: 'IV'},
    5: {multiplier: 1, die: 24, table: 'V'},
    6: {multiplier: 1, die: 30, table: 'V'},
    7: {multiplier: 1, die: 30, table: 'V'},
    8: {multiplier: 2, die: 20, table: 'V'},
    9: {multiplier: 2, die: 20, table: 'V'},
    10: {multiplier: 2, die: 20, table: 'V'},
  },
  wizard: {
    1: {multiplier: 1, die: 6, table: 'I'},
    2: {multiplier: 1, die: 6, table: 'I'},
    3: {multiplier: 1, die: 8, table: 'I'},
    4: {multiplier: 1, die: 8, table: 'I'},
    5: {multiplier: 1, die: 10, table: 'I'},
    6: {multiplier: 1, die: 10, table: 'I'},
    7: {multiplier: 1, die: 12, table: 'I'},
    8: {multiplier: 1, die: 12, table: 'I'},
    9: {multiplier: 1, die: 14, table: 'I'},
    10: {multiplier: 1, die: 14, table: 'I'},
  },
  cleric: {
    1: {multiplier: 1, die: 8, table: 'III'},
    2: {multiplier: 1, die: 8, table: 'III'},
    3: {multiplier: 1, die: 10, table: 'III'},
    4: {multiplier: 1, die: 10, table: 'III'},
    5: {multiplier: 1, die: 12, table: 'III'},
    6: {multiplier: 1, die: 12, table: 'III'},
    7: {multiplier: 1, die: 14, table: 'III'},
    8: {multiplier: 1, die: 14, table: 'III'},
    9: {multiplier: 1, die: 16, table: 'III'},
    10: {multiplier: 1, die: 16, table: 'III'},
  },
  thief: {
    1: {multiplier: 1, die: 10, modifier: 0, table: 'II'},
    2: {multiplier: 1, die: 12, modifier: 0, table: 'II'},
    3: {multiplier: 1, die: 14, modifier: 0, table: 'II'},
    4: {multiplier: 1, die: 16, modifier: 0, table: 'II'},
    5: {multiplier: 1, die: 20, modifier: 0, table: 'II'},
    6: {multiplier: 1, die: 24, modifier: 0, table: 'II'},
    7: {multiplier: 1, die: 30, modifier: 0, table: 'II'},
    8: {multiplier: 1, die: 30, modifier: 2, table: 'II'},
    9: {multiplier: 1, die: 30, modifier: 4, table: 'II'},
    10: {multiplier: 1, die: 30, modifier: 6, table: 'II'},
  },
  dwarf: {
    1: {multiplier: 1, die: 10, table: 'III'},
    2: {multiplier: 1, die: 12, table: 'III'},
    3: {multiplier: 1, die: 14, table: 'III'},
    4: {multiplier: 1, die: 16, table: 'IV'},
    5: {multiplier: 1, die: 20, table: 'IV'},
    6: {multiplier: 1, die: 24, table: 'V'},
    7: {multiplier: 1, die: 30, table: 'V'},
    8: {multiplier: 1, die: 30, table: 'V'},
    9: {multiplier: 2, die: 20, table: 'V'},
    10: {multiplier: 2, die: 20, table: 'V'},
  },
  halfling: {
    1: {multiplier: 1, die: 8, table: 'III'},
    2: {multiplier: 1, die: 8, table: 'III'},
    3: {multiplier: 1, die: 10, table: 'III'},
    4: {multiplier: 1, die: 10, table: 'III'},
    5: {multiplier: 1, die: 12, table: 'III'},
    6: {multiplier: 1, die: 12, table: 'III'},
    7: {multiplier: 1, die: 14, table: 'III'},
    8: {multiplier: 1, die: 14, table: 'III'},
    9: {multiplier: 1, die: 16, table: 'III'},
    10: {multiplier: 1, die: 16, table: 'III'},
  },
  elf: {
    1: {multiplier: 1, die: 6, table: 'II'},
    2: {multiplier: 1, die: 8, table: 'II'},
    3: {multiplier: 1, die: 8, table: 'II'},
    4: {multiplier: 1, die: 10, table: 'II'},
    5: {multiplier: 1, die: 10, table: 'II'},
    6: {multiplier: 1, die: 12, table: 'II'},
    7: {multiplier: 1, die: 12, table: 'II'},
    8: {multiplier: 1, die: 14, table: 'II'},
    9: {multiplier: 1, die: 14, table: 'II'},
    10: {multiplier: 1, die: 16, table: 'II'},
  },
};

export class CritButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0px;
      }
    `;
  }

  static get properties() {
    return {
      class: {type: String},
      level: {type: String},
      luck: {type: Number},
      luckySign: {attribute: 'lucky-sign', type: String},
      multiplierOverride: {attribute: 'multiplier-override', type: Number},
      dieOverride: {attribute: 'die-override', type: Number},
      modifierOverride: {attribute: 'modifier-override', type: Number},
      tableOverride: {attribute: 'table-override', type: String},
    };
  }

  constructor() {
    super();
    this.class = null;
    this.level = 0;
    this.luck = null;
    this.luckySign = null;
    this.multiplierOverride = null;
    this.dieOverride = null;
    this.modifierOverride = null;
    this.tableOverride = null;
  }

  render() {
    return html`
      <stat-display
        name="Crit"
        modifier="${this.multiplier}d"
        value="${this.die}"
        suffix="${this.formatModifier(this.modifier)} ${this.table}"
        clickable
        @value-clicked="${this.onClick}"
      ></stat-display>
    `;
  }

  get multiplier() {
    if (this.multiplierOverride) return Number(this.multiplierOverride);
    return classInfo[this.class][this.level].multiplier;
  }

  get die() {
    if (this.dieOverride) {
      if (typeof this.dieOverride === 'string') {
        return Number(this.dieOverride.replace('d', ''));
      }
      return this.dieOverride;
    }
    return classInfo[this.class][this.level].die;
  }

  get modifier() {
    // luck modifies crits
    let mod = this.modifierFor(this.luck);
    // the warriors arm lucky sign doubles the luck effect on crits
    // we do some processing on the input to make it as flexible as possible
    // eg. Warrior´s arm and warriors-arm work
    if (this.luckySignSlug === 'warriors-arm') {
      mod = mod * 2;
    }

		// the thief has a modifier at higher levels
		if (classInfo[this.class][this.level].modifier) {
			mod = mod + classInfo[this.class][this.level].modifier;
		}

    if (this.modifierOverride) mod = Number(this.modifierOverride);
    return mod;
  }

  get luckySignSlug() {
    if (
      this.luckySign &&
      this.luckySign
        .toLowerCase()
        .replaceAll(' ', '-')
        .replace(/['´]/g, '')
        .startsWith('warriors-arm')
    ) {
      return 'warriors-arm';
    }
    return '';
  }

  formatModifier(mod) {
    if (mod < 0) return String(mod);
    if (mod === 0) return '';
    return `+${mod}`;
  }

  get table() {
    if (this.tableOverride) return this.tableOverride;
    return classInfo[this.class][this.level].table;
  }

  onClick() {
    const roll = new DiceRoll();
    roll.name = 'Crit Roll';
    roll.description = 'A crit roll was made';
    roll.luck = this.luck;
    roll.luckySign = this.luckySign;
    roll.multiplier = this.multiplier;
    roll.die = this.die;
    roll.modifier = this.modifier;
    roll.table = this.table;

    this.dispatchEvent(
      new CustomEvent('crit-roll', {
        detail: roll,
      })
    );
  }

  modifierFor(stat) {
    if (stat <= 3) return -3;
    if (stat >= 4 && stat <= 5) return -2;
    if (stat >= 6 && stat <= 8) return -1;
    if (stat >= 9 && stat <= 12) return 0;
    if (stat >= 13 && stat <= 15) return +1;
    if (stat >= 16 && stat <= 17) return +2;
    if (stat >= 18) return +3;
    return 0;
  }
}

window.customElements.define('crit-button', CritButton);
