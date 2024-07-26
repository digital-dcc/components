// @ts-nocheck
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {PersonalityStat} from './personality-stat.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('personality-stat', () => {
  test('is defined', () => {
    const el = document.createElement('personality-stat');
    assert.instanceOf(el, PersonalityStat);
  });

  test('handles a click', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<personality-stat
        personality="17"
        max-personality="17"
        @personality-skill-check="${roll}"
      ></personality-stat>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      applyCheckPenalty: false,
      applyLuckModifier: false,
      name: 'Personality Roll',
      description: 'A personality roll was made',
      multiplier: 1,
      die: 20,
      dieAdjustment: 0,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxPersonality: 17,
      personality: 17,
      luck: null,
    });
  });
  test('handles click - die adjustment', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<personality-stat
        max-personality="17"
        die-adjustment="+2"
        @personality-skill-check="${roll}"
      ></personality-stat>`
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
      name: 'Personality Roll',
      description: 'A personality roll was made',
      multiplier: 1,
      die: 30,
      dieAdjustment: 2,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxPersonality: 17,
      personality: null,
    });
  });
});
