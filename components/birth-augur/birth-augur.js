import {LitElement, html, css} from 'lit';

const augurs = new Map([
	["harsh-winter", { birthAugur: "Harsh winter", luckyRoll: "All attack rolls" }],
	["the-bull", {birthAugur: "The bull", luckyRoll: "Melee attack rolls"}],
	["fortunate-date", {birthAugur: "Fortunate date", luckyRoll: "Missile fire attack rolls"}],
	["raised-by-wolves", {birthAugur: "Raised by wolves", luckyRoll: "Unarmed attack rolls"}],
	["conceived-on-horseback", {birthAugur: "Conceived on horseback", luckyRoll: "Mounted attack rolls"}],
	["born-on-the-battlefield", {birthAugur: "Born on the battlefield", luckyRoll: "Damage rolls"}],
	["path-of-the-bear", {birthAugur: "Path of the bear", luckyRoll: "Melee damage rolls"}],
	["hawkeye", {birthAugur: "Hawkeye", luckyRoll: "Missile fire damage rolls"}],
	["pack-hunter", {birthAugur: "Pack hunter", luckyRoll: "Attack and damage rolls for 0-level starting weapon"}],
	["born-under-the-loom", {birthAugur: "Born under the loom", luckyRoll: "Skill checks (including thief skills)"}],
	["foxs-cunning", {birthAugur: "Fox’s cunning", luckyRoll: "Find/disable traps"}],
	["four-leafed-clover", {birthAugur: "Four-leafed clover", luckyRoll: "Find secret doors"}],
	["seventh-son", {birthAugur: "Seventh son", luckyRoll: "Spell checks"}],
	["the-raging-storm", {birthAugur: "The raging storm", luckyRoll: "Spell damage"}],
	["righteous-heart", {birthAugur: "Righteous heart", luckyRoll: "Turn unholy checks"}],
	["survived-the-plague", {birthAugur: "Survived the plague", luckyRoll: "Magical healing", extra: { cleric: "Applies to all healing performed.", all: "Applies to all magical healing received." } }],
	["lucky-sign", {birthAugur: "Lucky sign", luckyRoll: "Saving throws"}],
	["guardian-angel", {birthAugur: "Guardian angel", luckyRoll: "Savings throws to escape traps"}],
	["survived-a-spider-bite", {birthAugur: "Survived a spider bite", luckyRoll: "Saving throws against poison"}],
	["struck-by-lightning", {birthAugur: "Struck by lightning", luckyRoll: "Reflex saving throws"}],
	["lived-through-famine", {birthAugur: "Lived through famine", luckyRoll: "Fortitude saving throws"}],
	["resisted-temptation", {birthAugur: "Resisted temptation", luckyRoll: "Willpower saving throws"}],
	["charmed-house", {birthAugur: "Charmed house", luckyRoll: "Armor Class"}],
	["speed-of-the-cobra", {birthAugur: "Speed of the cobra", luckyRoll: "Initiative"}],
	["bountiful-harvest", {birthAugur: "Bountiful harvest", luckyRoll: "Hit points (applies at each level)"}],
	["warriors-arm", {birthAugur: "Warrior’s arm", luckyRoll: "Critical hit tables", extra: {all: "Modifier is doubled for the purpose of crits." } }],
	["unholy-house", {birthAugur: "Unholy house", luckyRoll: "Corruption rolls"}],
	["the-broken-star", {birthAugur: "The Broken Star", luckyRoll: "Fumbles", extra: { all: "Modifier is doubled for the purpose of fumbles."} }],
	["birdsong", {birthAugur: "Birdsong", luckyRoll: "Number of languages"}],
	["wild-child", {birthAugur: "Wild child", luckyRoll: "Speed (each +1/-1 = +5’/-5’ speed)"}],
]);

export class BirthAugur extends LitElement {
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
        justify-content: space-between;
        min-height: 25px;
        font-family: var(--main-font, 'Arial', sans-serif);
        font-size: 1em;
        align-items: center;
        padding: 5px 10px 0px 10px;
				min-width: fit-content;
      }
			h1, h2, h3, p {
				margin: 0;
				margin-bottom: 5px;
				padding: 0;
			}
			h1 {
				font-size: 1.2em;
			}
    `;
  }

  static get properties() {
    return {
			class: {type: String},
      birthAugur: {attribute: 'birth-augur', type: String},
      startingLuck: {attribute: 'starting-luck', type: String},
    };
  }

  constructor() {
    super();
		this.class = null;
    this.birthAugur = null;
    this.startingLuck = null;
  }

	get birthAugurSlug() {
		return (this.birthAugur || '').toLowerCase().replace(/\s/g, '-').replace(/[`'´]/g, '')
	}

	extra(augur) {
		if (!augur.extra) return html``;
		if (augur.extra[this.class]) return html`${augur.extra[this.class]}`;
		return html`${augur.extra.all}`;
	}

  render() {
		const augur = augurs.get(this.birthAugurSlug) || { birthAugur: '', luckyRoll: '', extra: '' }; // pointless TS appeasement
    return html` <div part="wrapper" class="wrapper">
			<h1>Birth Augur and Lucky Roll</h1>
			<h2>${augur.birthAugur}</h2>
			<h3>${augur.luckyRoll} ${this.luckModifier(augur)}</h3>
			<p>${this.extra(augur)}</p>
		</div> `;
  }

	luckModifier(augur) {
		let modifier = this.modifierFor(this.startingLuck);
		if (modifier === 0) return html`(no effect)`;

		// doubles luck effect on crits 
		if (augur.birthAugur === 'Warrior’s arm') {
			modifier = modifier * 2;
		}

		// doubles luck effect on fumbles (lower is better)
		if (augur.birthAugur === 'The Broken Star') {
			modifier = modifier * -2;
		}

		// adjusts character movement rate
		if (augur.birthAugur === 'Wild child') {
			modifier = modifier * 5;
			return html`(${modifier > 0 ? `+${modifier} ft` : `${modifier} ft`})`;
		}

		return html`(${modifier > 0 ? `+${modifier}` : modifier})`;
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

window.customElements.define('birth-augur', BirthAugur);
