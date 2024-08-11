import {LitElement, html, css} from 'lit';
import {slug} from '../../utilities/slug.js';
import {occupations} from '../../utilities/occupations.js';

export class OccupationBox extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 0;
        margin: 0;
      }
      h2,
      p {
        margin: 0;
        padding: 0;
        font-size: 1rem;
        text-align: center;
        margin-bottom: 10px;
      }
      p {
        font-size: 1rem;
        margin-bottom: 0;
        font-size: 0.8em;
      }
      .wrapper {
        border-radius: 5px;
        padding: 10px;
        border: 1px black solid;
        margin-bottom: 10px;
        list-style-type: none;
      }
    `;
  }

  static get properties() {
    return {
      occupation: {type: String},
    };
  }

  constructor() {
    super();
    this.occupation = null;
  }

  get occupationData() {
    const occupation = occupations.get(slug(this.occupation || ''));
    if (!occupation) {
      return {
        occupation: 'No occupation',
        trainedWeapon: 'None',
        tradeGoods: 'None',
        race: 'None',
      };
    }
    return occupation;
  }

  get raceIfNecessary() {
    const {race} = this.occupationData || {};
    return race === 'human' ? `Human ` : '';
  }

  render() {
    const {occupation, trainedWeapon, tradeGoods} = this.occupationData || {};
    return html`
      <div part="wrapper" class="wrapper">
        <h2>${this.raceIfNecessary}${occupation}</h2>
        <p>
          <em>Trained Weapon</em> <strong>${trainedWeapon}</strong>
          <em>Trade Goods</em> <strong>${tradeGoods}</strong>
        </p>
      </div>
    `;
  }
}

window.customElements.define('occupation-box', OccupationBox);