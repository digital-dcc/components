// @ts-nocheck
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {StaminaStat} from './stamina-stat.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('stamina-stat', () => {
  test('is defined', () => {
    const el = document.createElement('stamina-stat');
    assert.instanceOf(el, StaminaStat);
  });

  test('handles a click', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<stamina-stat
        stamina="17"
        max-stamina="17"
        @stamina-roll="${roll}"
      ></stamina-stat>`
    );
    const button = el?.shadowRoot
      ?.querySelector('stat-display')
      ?.shadowRoot?.querySelector('button');
    button?.click();
    await el.updateComplete;

    assert.deepEqual(event.detail, {
      applyCheckPenalty: false,
      applyLuckModifier: false,
      name: 'Stamina Roll',
      description: 'A stamina roll was made',
      multiplier: 1,
      die: 20,
      dieAdjustment: 0,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxStamina: 17,
      stamina: 17,
      luck: null,
    });
  });
  test('handles click - die adjustment', async () => {
    let event;
    const roll = (e) => {
      event = e;
    };
    const el = await fixture(
      html`<stamina-stat
        max-stamina="17"
        die-adjustment="+2"
        @stamina-roll="${roll}"
      ></stamina-stat>`
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
      name: 'Stamina Roll',
      description: 'A stamina roll was made',
      multiplier: 1,
      die: 30,
      dieAdjustment: 2,
      modifierAdjustment: 0,
      modifier: 2,
      checkPenalty: 0,
      maxStamina: 17,
      stamina: null,
    });
  });
});
