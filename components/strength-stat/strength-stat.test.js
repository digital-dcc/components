// @ts-nocheck
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {StrengthStat} from './strength-stat.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('strength-stat', () => {
  test('is defined', () => {
    const el = document.createElement('strength-stat');
    assert.instanceOf(el, StrengthStat);
  });

  test('handles a click', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<strength-stat
        strength="17"
        @strength-roll="${roll}"
      ></strength-stat>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      applyCheckPenalty: false,
      applyLuckModifier: false,
      name: 'Strength Roll',
      description: 'A strength roll was made',
      multiplier: 1,
      die: 20,
      dieAdjustment: 0,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      strength: 17,
      luck: null,
    });
  });
  test('handles click - die adjustment', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<strength-stat
        strength="17"
        die-adjustment="+2"
        @strength-roll="${roll}"
      ></strength-stat>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      applyCheckPenalty: false,
      applyLuckModifier: false,
      luck: null,
      name: 'Strength Roll',
      description: 'A strength roll was made',
      multiplier: 1,
      die: 30,
      dieAdjustment: 2,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      strength: 17,
    });
  });
});
