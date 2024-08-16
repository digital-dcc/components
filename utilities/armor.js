export const armor = new Map([
  [
    '',
    {
      name: '',
      checkPenalty: 0,
      bonus: 0,
      speedModifier: 0,
      fumbleDie: 'd4',
      cost: 0,
    },
  ],
  [
    'unarmored',
    {
      name: 'Unarmored',
      checkPenalty: 0,
      bonus: 0,
      speedModifier: 0,
      fumbleDie: 'd4',
      cost: 0,
    },
  ],
  [
    'padded',
    {
      name: 'Padded',
      checkPenalty: 0,
      bonus: +1,
      speedModifier: 0,
      fumbleDie: 'd8',
      cost: 5,
    },
  ],
  [
    'leather',
    {
      name: 'Leather',
      checkPenalty: -1,
      bonus: +2,
      speedModifier: 0,
      fumbleDie: 'd8',
      cost: 20,
    },
  ],
  [
    'studded-leather',
    {
      name: 'Studded Leather',
      checkPenalty: -2,
      bonus: +3,
      speedModifier: 0,
      fumbleDie: 'd8',
      cost: 45,
    },
  ],
  [
    'hide',
    {
      name: 'Hide',
      checkPenalty: -3,
      bonus: +3,
      speedModifier: 0,
      fumbleDie: 'd12',
      cost: 30,
    },
  ],
  [
    'scale-mail',
    {
      name: 'Scale-mail',
      checkPenalty: -4,
      bonus: +4,
      speedModifier: -5,
      fumbleDie: 'd12',
      cost: 80,
    },
  ],
  [
    'chainmail',
    {
      name: 'Chainmail',
      checkPenalty: -5,
      bonus: +5,
      speedModifier: -5,
      fumbleDie: 'd12',
      cost: 150,
    },
  ],
  [
    'banded-mail',
    {
      name: 'Banded-mail',
      checkPenalty: -6,
      bonus: +6,
      speedModifier: -5,
      fumbleDie: 'd16',
      cost: 250,
    },
  ],
  [
    'half-plate',
    {
      name: 'Half-plate',
      checkPenalty: -7,
      bonus: +7,
      speedModifier: -10,
      fumbleDie: 'd16',
      cost: 550,
    },
  ],
  [
    'full-plate',
    {
      name: 'Full-plate',
      checkPenalty: -8,
      bonus: +8,
      speedModifier: -10,
      fumbleDie: 'd16',
      cost: 1200,
    },
  ],
  [
    'shield',
    {
      name: 'Shield',
      checkPenalty: -1,
      bonus: +1,
      speedModifier: 0,
      fumbleDie: 'd8',
      cost: 10,
    },
  ],
]);

const armorList = armor;

export const armorSlug = (armor = '') =>
  armor.replace(/[()]/g, '').replace(/[\s]/g, '-').toLowerCase();

export const checkPenaltyFor = (armor = 'unarmored', shield = false) => {
  let penalty = armorList.get(armorSlug(armor || ''))?.checkPenalty || 0;
  if (shield) penalty = penalty - 1;
  return penalty;
};

export const armorStatsFor = (armor = 'unarmored') => {
  return (
    armorList.get(armorSlug(armor || '')) || {
      checkPenalty: 0,
      bonus: 0,
      speedModifier: 0,
      fumbleDie: 'd4',
      cost: 0,
    }
  );
};
