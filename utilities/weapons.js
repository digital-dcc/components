export const weapons = new Map([
  [
    'Unarmed',
    {
      damage: '1d3',
      melee: true,
      subdualDamage: true,
    },
  ],
  [
    'Battleaxe',
    {
      damage: '1d10',
      twoHanded: true,
      cost: 7,
      melee: true,
    },
  ],
  [
    'Blackjack',
    {
      damage: '1d3',
      sneakDamage: '2d6',
      cost: 3,
      subdualDamage: true,
      melee: true,
    },
  ],
  [
    'Hammer',
    {
      damage: '1d4',
      cost: 3,
      melee: true,
    },
  ],
  [
    'Crowbar',
    {
      damage: '1d4',
      cost: 3,
      melee: true,
    },
  ],
  [
    'Pick',
    {
      damage: '1d4',
      cost: 3,
      melee: true,
    },
  ],
  [
    'Stick',
    {
      damage: '1d4',
      cost: 3,
      melee: true,
    },
  ],
  [
    'Club',
    {
      damage: '1d4',
      cost: 3,
      melee: true,
    },
  ],
  [
    'Flail',
    {
      damage: '1d6',
      cost: 6,
      melee: true,
    },
  ],
  [
    'Garrote',
    {
      damage: '1',
      sneakDamage: '3d4',
      cost: 2,
      melee: true,
    },
  ],
  [
    'Lance',
    {
      damage: '1d12',
      cost: 25,
      onlyUsableWhileMounted: true,
      doubleDamageMountedCharging: true,
      melee: true,
    },
  ],
  [
    'Longsword',
    {
      damage: '1d8',
      cost: 10,
      melee: true,
    },
  ],
  [
    'Mace',
    {
      damage: '1d6',
      cost: 5,
      melee: true,
    },
  ],
  [
    'Polearm',
    {
      damage: '1d10',
      cost: 7,
      twoHanded: true,
      melee: true,
    },
  ],
  [
    'Short sword',
    {
      damage: '1d6',
      cost: 7,
      melee: true,
    },
  ],
  [
    'Spear',
    {
      damage: '1d8',
      cost: 3,
      doubleDamageMountedCharging: true,
      melee: true,
    },
  ],
  [
    'Pitchfork',
    {
      damage: '1d8',
      cost: 3,
      doubleDamageMountedCharging: true,
      melee: true,
    },
  ],
  [
    'Staff',
    {
      damage: '1d4',
      cost: 0.5,
      melee: true,
    },
  ],
  [
    'Cudgel',
    {
      damage: '1d4',
      cost: 0.5,
      melee: true,
    },
  ],
  [
    'Shovel',
    {
      damage: '1d4',
      cost: 0.5,
      melee: true,
    },
  ],
  [
    'Pole',
    {
      damage: '1d4',
      cost: 0.5,
      melee: true,
    },
  ],
  [
    'Two-handed sword',
    {
      damage: '1d10',
      cost: 15,
      twoHanded: true,
      melee: true,
    },
  ],
  [
    'Warhammer',
    {
      damage: '1d8',
      cost: 5,
      melee: true,
    },
  ],
  [
    'Blowgun',
    {
      range: {short: 20, medium: 40, long: 60},
      damage: '1d3',
      sneakDamage: '1d5',
      cost: 6,
      melee: false,
      missile: true,
    },
  ],
  [
    'Crossbow',
    {
      range: {short: 80, medium: 160, long: 240},
      damage: '1d6',
      twoHanded: true,
      cost: 30,
      melee: false,
      missile: true,
    },
  ],
  [
    'Dagger',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Razor',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Awl',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Knife',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Chisel',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Scissors',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Trowel',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d4',
      sneakDamage: '1d10',
      thrown: true,
      cost: 3,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Dart',
    {
      range: {short: 20, medium: 40, long: 60},
      damage: '1d3',
      thrown: true,
      cost: 0.5,
      addStrengthToDamageAtShortRange: true,
      melee: false,
      missile: true,
    },
  ],
  [
    'Quill',
    {
      range: {short: 20, medium: 40, long: 60},
      damage: '1d3',
      thrown: true,
      cost: 0.5,
      addStrengthToDamageAtShortRange: true,
      melee: false,
      missile: true,
    },
  ],
  [
    'Handaxe',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d3',
      thrown: true,
      cost: 4,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Cleaver',
    {
      range: {short: 10, medium: 20, long: 30},
      damage: '1d3',
      thrown: true,
      cost: 4,
      addStrengthToDamageAtShortRange: true,
      melee: true,
      missile: true,
    },
  ],
  [
    'Javelin',
    {
      range: {short: 30, medium: 60, long: 90},
      damage: '1d3',
      thrown: true,
      cost: 1,
      addStrengthToDamageAtShortRange: true,
      melee: false,
      missile: true,
    },
  ],
  [
    'Longbow',
    {
      range: {short: 70, medium: 140, long: 210},
      damage: '1d6',
      twoHanded: true,
      cost: 40,
      melee: false,
      missile: true,
    },
  ],
  [
    'Shortbow',
    {
      range: {short: 50, medium: 100, long: 150},
      damage: '1d6',
      twoHanded: true,
      cost: 25,
      melee: false,
      missile: true,
    },
  ],
  [
    'Sling',
    {
      range: {short: 40, medium: 80, long: 160},
      damage: '1d3',
      cost: 2,
      addStrengthToDamageAtShortRange: true,
      melee: false,
      missile: true,
    },
  ],
]);

export const weaponStatsFor = (weaponType) => {
  const weapon = weapons.get(weaponType);
  if (weapon) {
    return weapon;
  }
};
