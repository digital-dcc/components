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
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .wrapper {
    border: 1px solid var(--secondary-text-color);
    background-color: var(--background-color);
    color: var(--primary-text-color);
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    min-width: 390px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  h1 {
    margin: 0;
    padding: 0;
    font-size: 0.8em;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 0.6em;
  }
  .checkboxes {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
  }
  .checkboxes li {
    flex-direction: row;
    list-style: none;
    font-size: 0.8em;
    min-width: fit-content;
  }
  .checkboxes label {
    display: flex;
    flex-direction: row;
    gap: 3px;
    align-items: center;
  }
  .you-are {
    color: var(--secondary-text-color);
    font-size: 1.1em;
  }
  .your-target-is {
    color: var(--secondary-text-color);
    font-size: 1.1em;
  }
  .title {
    font-size: 1em;
    color: var(--primary-text-color);
    text-align: center;
  }
  .sub-title {
    font-size: 1em;
    color: var(--primary-text-color);
    margin-bottom: 10px;
    font-weight: normal;
  }
`;
