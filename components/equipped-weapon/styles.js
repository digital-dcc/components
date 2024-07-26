import {css} from 'lit';

export const styles = css`
  :host {
    display: block;
    padding: 0px;
    font-family: var(--main-font, 'Arial', sans-serif);
    font-size: 1em;
    --primary-text-color: black;
    --secondary-text-color: rgb(113, 133, 122);
    --background-color: #ffffff;
  }
  :host([theme='dark']) {
    --primary-text-color: #ffffff;
    --secondary-text-color: #c3c3c3;
    --background-color: #000000;
  }
  .wrapper {
    border: 1px var(--secondary-text-color) solid;
    background-color: var(--background-color);
    color: var(--primary-text-color);
    padding: 15px;
    border-radius: 10px;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  button.attack-display-button,
  button.damage-display-button {
    aspect-ratio: 1 / 1;
    border-radius: 5px;
    border: 1px var(--secondary-text-color) solid;
    cursor: pointer;
    background: none;
    min-width: 60px;
    min-height: 60px;
    margin: 0;
    padding: 0;
    color: var(--primary-text-color);
  }
  button:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
  button:active {
    transform: translateY(1px);
  }
  .wielding-and-subdual {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .dice-chain-adjustment-buttons {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .dice-chain-adjustment-buttons button {
    margin: 0;
    padding: 0px;
    aspect-ratio: 1/1;
    width: 22px;
    border: 1px var(--secondary-text-color) solid;
    cursor: pointer;
    border-radius: 50%;
  }
  .wrapper header .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: fit-content;
    text-align: left;
    gap: 5px;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 1em;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 0.8em;
  }
  .range {
    font-size: 0.8em;
  }
  ul {
    font-size: 0.8em;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .checkboxes {
    margin: 0;
    padding: 0;
  }
  .checkboxes li {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  header {
    display: flex;
    justify-content: space-between;
  }
  input[type='checkbox'],
  input[type='radio'] {
    margin: 0;
  }
  .range ul {
    display: flex;
    gap: 5px;
  }
  .range label {
    display: flex;
    gap: 5px;
    flex-direction: row;
    align-items: center;
  }
  .attack {
    display: flex;
    gap: 5px;
  }
  .damage {
    display: flex;
    gap: 5px;
  }
`;
