export const armor = new Map([
  ['', {checkPenalty: 0}],
  ['unarmored', {checkPenalty: 0}],
  ['padded', {checkPenalty: 0}],
  ['leather', {checkPenalty: -1}],
  ['studded-leather', {checkPenalty: -2}],
  ['hide', {checkPenalty: -3}],
  ['scale-mail', {checkPenalty: -4}],
  ['chainmail', {checkPenalty: -5}],
  ['banded-mail', {checkPenalty: -6}],
  ['half-plate', {checkPenalty: -7}],
  ['full-plate', {checkPenalty: -8}],
]);

export const armorSlug = (armor = '') =>
  armor.replace(/[()]/g, '').replace(/[\s]/g, '-').toLowerCase();
