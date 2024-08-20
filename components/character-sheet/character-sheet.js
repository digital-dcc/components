import {LitElement, html} from 'lit';
import {styles} from './styles.js';

import '../dice-roller/dice-roller.js';
import '../title-box/title-box.js';
import '../hit-points/hit-points.js';
import '../armor-class/armor-class.js';
import '../experience-points/experience-points.js';
import '../speed-display/speed-display.js';
import '../init-display/init-display.js';
import '../alignment-display/alignment-display.js';
import '../check-penalty/check-penalty.js';
import '../crit-button/crit-button.js';
import '../fumble-button/fumble-button.js';
import '../equipped-weapon/equipped-weapon.js';
import '../character-features/character-features.js';
import '../character-languages/character-languages.js';
import '../character-language-item/character-language-item.js';
import '../inventory-panel/inventory-panel.js';
import '../inventory-ammunition/inventory-ammunition.js';
import '../inventory-armor/inventory-armor.js';
import '../inventory-equipment/inventory-equipment.js';
import '../inventory-mount-gear/inventory-mount-gear.js';
import '../inventory-weapon/inventory-weapon.js';
import '../weapons-panel/weapons-panel.js';
import '../birth-augur/birth-augur.js';
import '../strength-stat/strength-stat.js';
import '../agility-stat/agility-stat.js';
import '../stamina-stat/stamina-stat.js';
import '../intelligence-stat/intelligence-stat.js';
import '../personality-stat/personality-stat.js';
import '../luck-stat/luck-stat.js';
import '../reflex-save/reflex-save.js';
import '../fortitude-save/fortitude-save.js';
import '../willpower-save/willpower-save.js';
import '../thief-skills/thief-skills.js';
import '../notes-box/notes-box.js';
import '../occupation-box/occupation-box.js';

export class CharacterSheet extends LitElement {
  static get styles() {
    return [styles];
  }

  static get properties() {
    return {
      data: {type: Object, attribute: false},
      diceRoll: {type: Boolean, state: true},
      diceRollerIsOpen: {type: Boolean, state: true},
      checkPenaltySelected: {type: Boolean, state: true},
    };
  }

  constructor() {
    super();
    this.data = {};
    this.diceRoll = null;
    this.diceRollerIsOpen = false;
    this.checkPenaltySelected = false;
  }

  handleDiceRollRequested(e) {
    this.diceRoll = e.detail;
    this.diceRollerIsOpen = true;
  }

  handleDiceRollPerformed() {
    this.diceRoll = null;
  }

  handleDiceRollClosed() {
    this.diceRoll = null;
    this.diceRollerIsOpen = false;
  }

  onCheckPenaltySelected() {
    this.checkPenaltySelected = !this.checkPenaltySelected;
  }

  handleNotesChanged(e) {
    this.data.notes = e.detail;
  }

  onCoinChange(e) {
    this.data[e.detail.type] = e.detail.value;
  }

  onTreasureChange(e) {
    this.data.treasure = e.detail.value;
  }

  onAddInventoryItem() {}

  render() {
    return html`
      <!-- Dice Roller Modal Component -->
      <dice-roller
        .diceRoll="${this.diceRoll}"
        .open="${this.diceRollerIsOpen}"
        @close="${this.handleDiceRollClosed}"
        @ondice-roll-result="${this.handleDiceRollPerformed}"
      ></dice-roller>
      <!-- / Dice Roller Modal Component -->
      <div class="wrapper column">
        <section class="row">
          <div class="row w-full space-between">
            <title-box
              name="${this.data.name}"
              alignment="${this.data.alignment}"
              character-class="${this.data.characterClass}"
              level="${this.data.level}"
            ></title-box>
            <div class="row right-justify">
              <speed-display
                birth-augur="${this.data.birthAugur}"
                occupation="${this.data.occupation}"
                starting-luck="${this.data.startingLuck}"
              ></speed-display>
              <alignment-display
                alignment="${this.data.alignment}"
              ></alignment-display>
              <experience-points xp=${this.data.xp}></experience-points>
            </div>
          </div>
        </section>
        <section class="row w-full space-between">
          <section class="column">
            <div class="row gap-20">
              <strength-stat
                armor=${this.data.armor}
                max-strength=${this.data.maxStrength}
                ?apply-check-penalty="${this.checkPenaltySelected}"
                @strength-skill-check="${this.handleDiceRollRequested}"
              ></strength-stat>
              <agility-stat
                armor=${this.data.armor}
                max-agility=${this.data.maxAgility}
                ?apply-check-penalty="${this.checkPenaltySelected}"
                @agility-skill-check="${this.handleDiceRollRequested}"
              ></agility-stat>
              <stamina-stat
                armor=${this.data.armor}
                max-stamina=${this.data.maxStamina}
                ?apply-check-penalty="${this.checkPenaltySelected}"
                @stamina-skill-check="${this.handleDiceRollRequested}"
              ></stamina-stat>
              <intelligence-stat
                armor=${this.data.armor}
                max-intelligence=${this.data.maxIntelligence}
                ?apply-check-penalty="${this.checkPenaltySelected}"
                @intelligence-skill-check="${this.handleDiceRollRequested}"
              ></intelligence-stat>
              <personality-stat
                armor=${this.data.armor}
                max-personality=${this.data.maxPersonality}
                ?apply-check-penalty="${this.checkPenaltySelected}"
                @personality-skill-check="${this.handleDiceRollRequested}"
              ></personality-stat>
              <luck-stat
                armor=${this.data.armor}
                max-luck=${this.data.maxLuck}
                @luck-check="${this.handleDiceRollRequested}"
                ?apply-check-penalty="${this.checkPenaltySelected}"
                @luck-skill-check="${this.handleDiceRollRequested}"
              ></luck-stat>
            </div>
            <check-penalty
              ?checked="${this.checkPenaltySelected}"
              armor=${this.data.armor}
              display-modifier
              ?shield=${this.data.shield}
              @change="${this.onCheckPenaltySelected}"
            ></check-penalty>
          </section>
          <section class="row right-justify">
            <armor-class
              agility=${this.data.agility}
              armor=${this.data.armor}
              ?shield=${this.data.shield}
            ></armor-class>
            <hit-points
              hp=${this.data.hp}
              max-hp=${this.data.maxHP}
            ></hit-points>
          </section>
        </section>
        <section class="row">
          <section class="column item-1-3">
            <section class="saving-throws">
              <h2>Saving Throws</h2>
              <div class="row-items">
                <div class="item-1-3">
                  <reflex-save
                    agility="${this.data.agility}"
                    birth-augur="${this.data.birthAugur}"
                    character-class="${this.data.characterClass}"
                    level="${this.data.level}"
                    starting-luck="${this.data.startingLuck}"
                    @reflex-saving-throw="${this.handleDiceRollRequested}"
                  ></reflex-save>
                </div>
                <div class="item-1-3">
                  <fortitude-save
                    stamina="${this.data.stamina}"
                    birth-augur="${this.data.birthAugur}"
                    character-class="${this.data.characterClass}"
                    level="${this.data.level}"
                    starting-luck="${this.data.startingLuck}"
                    @fortitude-saving-throw="${this.handleDiceRollRequested}"
                  ></fortitude-save>
                </div>
                <div class="item-1-3">
                  <willpower-save
                    personality="${this.data.personality}"
                    birth-augur="${this.data.birthAugur}"
                    character-class="${this.data.characterClass}"
                    level="${this.data.level}"
                    starting-luck="${this.data.startingLuck}"
                    @willpower-saving-throw="${this.handleDiceRollRequested}"
                  ></willpower-save>
                </div>
              </div>
            </section>

            <section class="combat">
              <h2>Combat</h2>
              <div class="row-items">
                <div class="item-1-3">
                  <init-display
                    character-class="${this.data.characterClass}"
                    agility=${this.data.agility}
                    birth-augur="${this.data.birthAugur}"
                    starting-luck="${this.data.startingLuck}"
                    character-level="${this.data.level}"
                    @init-roll="${this.handleDiceRollRequested}"
                  ></init-display>
                </div>
                <div class="item-1-3">
                  <crit-button
                    birth-augur="${this.data.birthAugur}"
                    characterClass="${this.data.characterClass}"
                    level="${this.data.level}"
                    luck="${this.data.luck}"
                    @crit-roll="${this.handleDiceRollRequested}"
                  ></crit-button>
                </div>
                <div class="item-1-3">
                  <fumble-button
                    birth-augur="${this.data.birthAugur}"
                    luck="${this.data.luck}"
                    armor=${this.data.armor}
                    ?shield=${this.data.shield}
                    @fumble-roll="${this.handleDiceRollRequested}"
                  ></fumble-button>
                </div>
              </div>
            </section>
            <section class="birth-augur">
              <birth-augur
                birth-augur="${this.data.birthAugur}"
                starting-luck="${this.data.startingLuck}"
                character-class="${this.data.characterClass}"
              ></birth-augur>
            </section>
            <occupation-box
              occupation="${this.data.occupation}"
            ></occupation-box>
            <section class="languages">
              <character-languages>
                ${this.data.languages.map(
                  (language) =>
                    html`<character-language-item
                      name="${language}"
                    ></character-language-item>`
                )}
              </character-languages>
            </section>
          </section>
          <section class="column">
            <section class="attacks">
              <weapons-panel>
                <equipped-weapon
                  agility="${this.data.agility}"
                  birth-augur="${this.data.birthAugur}"
                  luck="${this.data.luck}"
                  weapon="Longsword"
                ></equipped-weapon>
              </weapons-panel>
            </section>
            <section class="equipment">
              <inventory-panel
                cp="${this.data.cp}"
                ep="${this.data.ep}"
                gp="${this.data.gp}"
                pp="${this.data.pp}"
                sp="${this.data.sp}"
                treasure="${this.data.treasure}"
                @coin-change="${this.onCoinChange}"
                @treasure-change="${this.onTreasureChange}"
                @add-item="${this.onAddInventoryItem}"
              ></inventory-panel>
            </section>
            <section class="notes">
              <notes-box
                value="${this.data.notes}"
                @change="${this.handleNotesChanged}"
              ></notes-box>
            </section>
          </section>
        </section>

        <section class="row"></section>
        <section class="row">
          ${this.data.characterClass && this.data.level > 0
            ? html`<section class="class-features"></section>`
            : html``}
        </section>
        <section class="row"></section>
        ${this.data.characterClass === 'thief'
          ? html`<section class="row">
              <section class="thieves-skills">
                <thief-skills
                  agility="${this.data.agility}"
                  alignment="${this.data.alignment}"
                  armor=${this.data.armor}
                  birth-augur="${this.data.birthAugur}"
                  intelligence="${this.data.intelligence}"
                  level="${this.data.level}"
                  personality="${this.data.personality}"
                  ?shield=${this.data.shield}
                  starting-luck="${this.data.startingLuck}"
                  ?apply-check-penalty="${this.checkPenaltySelected}"
                  @thief-skill-check="${this.handleDiceRollRequested}"
                ></thief-skills>
              </section>
            </section>`
          : html``}
        <div class="row"></div>
        <section class="row"></section>
      </div>
    `;
  }
}

window.customElements.define('character-sheet', CharacterSheet);
