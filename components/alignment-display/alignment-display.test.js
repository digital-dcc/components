//@ts-nocheck

import {AlignmentDisplay} from './alignment-display.js';
// import {assert} from '@open-wc/testing';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('alignment-display', () => {
  test('is defined', () => {
    const el = document.createElement('alignment-display');
    assert.instanceOf(el, AlignmentDisplay);
  });

  test('displays correct alignment - law', async () => {
    const el = await fixture(
      html`<alignment-display alignment="law"></alignment-display>`
    );
    const alignment = el.shadowRoot?.querySelector('.alignment-name');
    assert.match(alignment.innerText, /Law/);
  });

  test('displays correct alignment - neutrality', async () => {
    const el = await fixture(
      html`<alignment-display alignment="neutrality"></alignment-display>`
    );
    const alignment = el.shadowRoot?.querySelector('.alignment-name');
    assert.match(alignment.innerText, /Neutral/);
  });

  test('displays correct alignment - chaos', async () => {
    const el = await fixture(
      html`<alignment-display alignment="chaos"></alignment-display>`
    );
    const alignment = el.shadowRoot?.querySelector('.alignment-name');
    assert.match(alignment.innerText, /Chaos/);
  });
});
