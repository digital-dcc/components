import {
  wizard,
  features as wizardFeatures,
} from './character-classes/wizard.js';
import {
  warrior,
  features as warriorFeatures,
} from './character-classes/warrior.js';
import {thief, features as thiefFeatures} from './character-classes/thief.js';
import {dwarf, features as dwarfFeatures} from './character-classes/dwarf.js';
import {elf, features as elfFeatures} from './character-classes/elf.js';
import {
  halfling,
  features as halflingFeatures,
} from './character-classes/halfling.js';
import {
  cleric,
  features as clericFeatures,
} from './character-classes/cleric.js';

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

export const characterClassFeatures = new Map();
characterClassFeatures.set('thief', thiefFeatures);
characterClassFeatures.set('warrior', warriorFeatures);
characterClassFeatures.set('wizard', wizardFeatures);
characterClassFeatures.set('cleric', clericFeatures);
characterClassFeatures.set('dwarf', dwarfFeatures);
characterClassFeatures.set('elf', elfFeatures);
characterClassFeatures.set('halfling', halflingFeatures);
