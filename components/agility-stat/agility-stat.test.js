// @ts-nocheck
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {AgilityStat} from './agility-stat.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('agility-stat', () => {
  test('is defined', () => {
    const el = document.createElement('agility-stat');
    assert.instanceOf(el, AgilityStat);
  });

  test('handles a click', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<agility-stat
        agility="17"
        max-agility="17"
        @agility-skill-check="${roll}"
      ></agility-stat>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      applyCheckPenalty: false,
      applyLuckModifier: false,
      name: 'Agility Roll',
      description: 'An agility roll was made',
      multiplier: 1,
      die: 20,
      dieAdjustment: 0,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxAgility: 17,
      agility: 17,
      luck: null,
    });
  });
  test('handles click - die adjustment', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<agility-stat
        max-agility="17"
        die-adjustment="+2"
        @agility-skill-check="${roll}"
      ></agility-stat>`
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
      name: 'Agility Roll',
      description: 'An agility roll was made',
      multiplier: 1,
      die: 30,
      dieAdjustment: 2,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxAgility: 17,
      agility: null,
    });
  });
});
