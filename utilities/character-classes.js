import {wizard} from './character-classes/wizard.js';
import {warrior} from './character-classes/warrior.js';
import {thief} from './character-classes/thief.js';
import { dwarf } from './character-classes/dwarf.js';
import { elf } from './character-classes/elf.js';
import { halfling } from './character-classes/halfling.js';
import {cleric} from './character-classes/cleric.js';

/**
 * @type {Map<string, Map<number, object>>}
 */
export const characterClasses = new Map();
characterClasses.set('thief', thief);
characterClasses.set('warrior', warrior);
characterClasses.set('wizard', wizard);
characterClasses.set('cleric', cleric);
characterClasses.set('dwarf', dwarf);
characterClasses.set('elf', elf);
characterClasses.set('halfling', halfling);