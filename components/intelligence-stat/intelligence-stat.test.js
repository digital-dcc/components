// @ts-nocheck
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {IntelligenceStat} from './intelligence-stat.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('intelligence-stat', () => {
  test('is defined', () => {
    const el = document.createElement('intelligence-stat');
    assert.instanceOf(el, IntelligenceStat);
  });

  test('handles a click', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<intelligence-stat
        intelligence="17"
        max-intelligence="17"
        @intelligence-skill-check="${roll}"
      ></intelligence-stat>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      applyCheckPenalty: false,
      applyLuckModifier: false,
      name: 'Intelligence Roll',
      description: 'An intelligence roll was made',
      multiplier: 1,
      die: 20,
      dieAdjustment: 0,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxIntelligence: 17,
      intelligence: 17,
      luck: null,
    });
  });
  test('handles click - die adjustment', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<intelligence-stat
        max-intelligence="17"
        die-adjustment="+2"
        @intelligence-skill-check="${roll}"
      ></intelligence-stat>`
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
      name: 'Intelligence Roll',
      description: 'An intelligence roll was made',
      multiplier: 1,
      die: 30,
      dieAdjustment: 2,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxIntelligence: 17,
      intelligence: null,
    });
  });
});
