export const armor = new Map([
  ['', {checkPenalty: 0}],
  ['unarmored', {checkPenalty: 0, bonus: 0}],
  ['padded', {checkPenalty: 0, bonus: +1}],
  ['leather', {checkPenalty: -1, bonus: +2}],
  ['studded-leather', {checkPenalty: -2, bonus: +3}],
  ['hide', {checkPenalty: -3, bonus: +3}],
  ['scale-mail', {checkPenalty: -4, bonus: +4}],
  ['chainmail', {checkPenalty: -5, bonus: +5}],
  ['banded-mail', {checkPenalty: -6, bonus: +6}],
  ['half-plate', {checkPenalty: -7, bonus: +7}],
  ['full-plate', {checkPenalty: -8, bonus: +8}],
]);

const armorList = armor;

export const armorSlug = (armor = '') =>
  armor.replace(/[()]/g, '').replace(/[\s]/g, '-').toLowerCase();

export const checkPenaltyFor = (armor = 'unarmored', shield = false) => {
  let penalty = armorList.get(armorSlug(armor || ''))?.checkPenalty || 0;
  if (shield) penalty = penalty - 1;
  return penalty;
};
