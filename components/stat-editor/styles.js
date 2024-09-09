import {css} from 'lit';

export const styles = css`
  :host {
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
  h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
  }
  .adjustment-button {
    background-color: #f2f2f2;
    text-align: center;
    justify-items: center;
    font-size: 0.8rem;
    line-height: 0.8rem;
    border-radius: 5px;
    width: 40px;
    height: 25px;
  }
  .mt-10 {
    margin-top: 10px;
  }
  .pt-10 {
    padding-top: 10px;
  }
  td {
    text-align: center;
    padding: 10px 20px;
  }
  .first {
    text-align: left;
  }
  button {
    padding: 0;
    margin: 0;
    border-radius: 25%;
    cursor: pointer;
    border: none;
    background-color: #f2f2f2;
  }
  .adjustment-button {
    width: 30px;
    height: 30px;
  }
  .controls {
  }
  .stat-display {
    display: inline-block;
    width: 30px;
  }
`;
