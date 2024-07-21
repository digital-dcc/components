// @ts-nocheck
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FumbleButton} from './fumble-button.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('fumble-button', () => {
  test('is defined', () => {
    const el = document.createElement('fumble-button');
    assert.instanceOf(el, FumbleButton);
  });

  test('handles a click', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<fumble-button
        class="warrior"
        level="10"
        luck="7"
        lucky-sign="The Broken Star"
        @fumble-roll="${roll}"
      ></fumble-button>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      name: 'Fumble Roll',
      description: 'A fumble roll was made',
			armor: "Unarmored",
      luck: 7,
      multiplier: 1,
      die: 4,
      modifier: 2,
      shield: false,
      luckySign: 'the-broken-star',
    });
  });
});
