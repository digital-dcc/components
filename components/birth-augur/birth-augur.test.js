//@ts-nocheck

import {BirthAugur} from './birth-augur.js';
// import {assert} from '@open-wc/testing';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('birth-augur', () => {
  test('is defined', () => {
    const el = document.createElement('birth-augur');
    assert.instanceOf(el, BirthAugur);
  });

  test('dispatches clicks', async () => {
    let event;
    const change = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<birth-augur @change="${change}"></birth-augur>`
    );
    const checkbox = el.shadowRoot?.querySelector('input[type="checkbox"]');
    checkbox?.click();
    await el.updateComplete;

    assert.equal(event.detail.checked, true);
  });
});
