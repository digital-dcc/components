export const displayName = 'Thief';

export const thief = new Map([
  [
    1,
    {
      level: 1,
      attack: 0,
      critDie: '1d10',
      critTable: 'II',
      actionDice: '1d20',
      luckDie: 'd3',
      ref: 1,
      fort: 1,
      will: 0,
    },
  ],
  [
    2,
    {
      level: 2,
      attack: 1,
      critDie: '1d12',
      critTable: 'II',
      actionDice: '1d20',
      luckDie: 'd4',
      ref: 1,
      fort: 1,
      will: 0,
    },
  ],
  [
    3,
    {
      level: 3,
      attack: 2,
      critDie: '1d14',
      critTable: 'II',
      actionDice: '1d20',
      luckDie: 'd5',
      ref: 2,
      fort: 1,
      will: 1,
    },
  ],
  [
    4,
    {
      level: 4,
      attack: 2,
      critDie: '1d16',
      critTable: 'II',
      actionDice: '1d20',
      luckDie: 'd6',
      ref: 2,
      fort: 2,
      will: 1,
    },
  ],
  [
    5,
    {
      level: 5,
      attack: 3,
      critDie: '1d20',
      critTable: 'II',
      actionDice: '1d20',
      luckDie: 'd7',
      ref: 3,
      fort: 2,
      will: 1,
    },
  ],
  [
    6,
    {
      level: 6,
      attack: 4,
      critDie: '1d24',
      critTable: 'II',
      actionDice: '1d20+1d14',
      luckDie: 'd8',
      ref: 4,
      fort: 2,
      will: 2,
    },
  ],
  [
    7,
    {
      level: 7,
      attack: 5,
      critDie: '1d30',
      critTable: 'II',
      actionDice: '1d20+1d16',
      luckDie: 'd10',
      ref: 4,
      fort: 3,
      will: 2,
    },
  ],
  [
    8,
    {
      level: 8,
      attack: 5,
      critDie: '1d30+2',
      critTable: 'II',
      actionDice: '1d20+1d20',
      luckDie: 'd12',
      ref: 5,
      fort: 3,
      will: 2,
    },
  ],
  [
    9,
    {
      level: 9,
      attack: 6,
      critDie: '1d30+4',
      critTable: 'II',
      actionDice: '1d20+1d20',
      luckDie: 'd14',
      ref: 5,
      fort: 3,
      will: 3,
    },
  ],
  [
    10,
    {
      level: 10,
      attack: 7,
      critDie: '1d30+6',
      critTable: 'II',
      actionDice: '1d20+1d20',
      luckDie: 'd16',
      ref: 5,
      fort: 4,
      will: 3,
    },
  ],
]);

// TODO: skills are modified by attribute bonuses, agility, intelligence and personality depending on the skill

// @ts-ignore
export const skills = new Map([
  [
    'backstab',
    // modified by str or agility depending on melee or missile as well as attack bonus from class and magic weapon bonus if applicable
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 1}],
          [3, {level: 3, bonus: 2}],
          [4, {level: 4, bonus: 3}],
          [5, {level: 5, bonus: 4}],
          [6, {level: 6, bonus: 5}],
          [7, {level: 7, bonus: 6}],
          [8, {level: 8, bonus: 7}],
          [9, {level: 9, bonus: 8}],
          [10, {level: 10, bonus: 9}],
        ]),
      ],
    ]),
  ],
  [
    'sneakSilently',
    // modified by agility
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
    ]),
  ],
  [
    'hideInShadows',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
    ]),
  ],
  [
    'pickPocket',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 1}],
          [3, {level: 3, bonus: 2}],
          [4, {level: 4, bonus: 3}],
          [5, {level: 5, bonus: 4}],
          [6, {level: 6, bonus: 5}],
          [7, {level: 7, bonus: 6}],
          [8, {level: 8, bonus: 7}],
          [9, {level: 9, bonus: 8}],
          [10, {level: 10, bonus: 9}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
    ]),
  ],
  [
    'climbSheerSurfaces',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
    ]),
  ],
  [
    'pickLock',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
    ]),
  ],
  [
    'findTrap',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
    ]),
  ],
  [
    'disableTrap',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 1}],
          [3, {level: 3, bonus: 2}],
          [4, {level: 4, bonus: 3}],
          [5, {level: 5, bonus: 4}],
          [6, {level: 6, bonus: 5}],
          [7, {level: 7, bonus: 6}],
          [8, {level: 8, bonus: 7}],
          [9, {level: 9, bonus: 8}],
          [10, {level: 10, bonus: 9}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 1}],
          [2, {level: 2, bonus: 3}],
          [3, {level: 3, bonus: 5}],
          [4, {level: 4, bonus: 7}],
          [5, {level: 5, bonus: 8}],
          [6, {level: 6, bonus: 9}],
          [7, {level: 7, bonus: 10}],
          [8, {level: 8, bonus: 11}],
          [9, {level: 9, bonus: 12}],
          [10, {level: 10, bonus: 13}],
        ]),
      ],
    ]),
  ],
  [
    'forgeDocument',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 0}],
          [3, {level: 3, bonus: 1}],
          [4, {level: 4, bonus: 2}],
          [5, {level: 5, bonus: 3}],
          [6, {level: 6, bonus: 4}],
          [7, {level: 7, bonus: 5}],
          [8, {level: 8, bonus: 6}],
          [9, {level: 9, bonus: 7}],
          [10, {level: 10, bonus: 8}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 0}],
          [3, {level: 3, bonus: 1}],
          [4, {level: 4, bonus: 2}],
          [5, {level: 5, bonus: 3}],
          [6, {level: 6, bonus: 4}],
          [7, {level: 7, bonus: 5}],
          [8, {level: 8, bonus: 6}],
          [9, {level: 9, bonus: 7}],
          [10, {level: 10, bonus: 8}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
    ]),
  ],
  [
    'disguiseSelf',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 1}],
          [3, {level: 3, bonus: 2}],
          [4, {level: 4, bonus: 3}],
          [5, {level: 5, bonus: 4}],
          [6, {level: 6, bonus: 5}],
          [7, {level: 7, bonus: 6}],
          [8, {level: 8, bonus: 7}],
          [9, {level: 9, bonus: 8}],
          [10, {level: 10, bonus: 9}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 0}],
          [3, {level: 3, bonus: 1}],
          [4, {level: 4, bonus: 2}],
          [5, {level: 5, bonus: 3}],
          [6, {level: 6, bonus: 4}],
          [7, {level: 7, bonus: 5}],
          [8, {level: 8, bonus: 6}],
          [9, {level: 9, bonus: 7}],
          [10, {level: 10, bonus: 8}],
        ]),
      ],
    ]),
  ],
  [
    'readLanguages',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 0}],
          [3, {level: 3, bonus: 1}],
          [4, {level: 4, bonus: 2}],
          [5, {level: 5, bonus: 3}],
          [6, {level: 6, bonus: 4}],
          [7, {level: 7, bonus: 5}],
          [8, {level: 8, bonus: 6}],
          [9, {level: 9, bonus: 7}],
          [10, {level: 10, bonus: 8}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 0}],
          [3, {level: 3, bonus: 1}],
          [4, {level: 4, bonus: 2}],
          [5, {level: 5, bonus: 3}],
          [6, {level: 6, bonus: 4}],
          [7, {level: 7, bonus: 5}],
          [8, {level: 8, bonus: 6}],
          [9, {level: 9, bonus: 7}],
          [10, {level: 10, bonus: 8}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 1}],
          [3, {level: 3, bonus: 2}],
          [4, {level: 4, bonus: 3}],
          [5, {level: 5, bonus: 4}],
          [6, {level: 6, bonus: 5}],
          [7, {level: 7, bonus: 6}],
          [8, {level: 8, bonus: 7}],
          [9, {level: 9, bonus: 8}],
          [10, {level: 10, bonus: 9}],
        ]),
      ],
    ]),
  ],
  [
    'handlePoison',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 1}],
          [3, {level: 3, bonus: 2}],
          [4, {level: 4, bonus: 3}],
          [5, {level: 5, bonus: 4}],
          [6, {level: 6, bonus: 5}],
          [7, {level: 7, bonus: 6}],
          [8, {level: 8, bonus: 7}],
          [9, {level: 9, bonus: 8}],
          [10, {level: 10, bonus: 9}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 3}],
          [2, {level: 2, bonus: 5}],
          [3, {level: 3, bonus: 7}],
          [4, {level: 4, bonus: 8}],
          [5, {level: 5, bonus: 9}],
          [6, {level: 6, bonus: 11}],
          [7, {level: 7, bonus: 12}],
          [8, {level: 8, bonus: 13}],
          [9, {level: 9, bonus: 14}],
          [10, {level: 10, bonus: 15}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 0}],
          [2, {level: 2, bonus: 0}],
          [3, {level: 3, bonus: 1}],
          [4, {level: 4, bonus: 2}],
          [5, {level: 5, bonus: 3}],
          [6, {level: 6, bonus: 4}],
          [7, {level: 7, bonus: 5}],
          [8, {level: 8, bonus: 6}],
          [9, {level: 9, bonus: 7}],
          [10, {level: 10, bonus: 8}],
        ]),
      ],
    ]),
  ],
  [
    'castSpellFromScroll',
    new Map([
      [
        'lawful',
        new Map([
          [1, {level: 1, bonus: 'd10'}],
          [2, {level: 2, bonus: 'd10'}],
          [3, {level: 3, bonus: 'd12'}],
          [4, {level: 4, bonus: 'd12'}],
          [5, {level: 5, bonus: 'd14'}],
          [6, {level: 6, bonus: 'd14'}],
          [7, {level: 7, bonus: 'd16'}],
          [8, {level: 8, bonus: 'd16'}],
          [9, {level: 9, bonus: 'd20'}],
          [10, {level: 10, bonus: 'd20'}],
        ]),
      ],
      [
        'chaotic',
        new Map([
          [1, {level: 1, bonus: 'd10'}],
          [2, {level: 2, bonus: 'd10'}],
          [3, {level: 3, bonus: 'd12'}],
          [4, {level: 4, bonus: 'd12'}],
          [5, {level: 5, bonus: 'd14'}],
          [6, {level: 6, bonus: 'd14'}],
          [7, {level: 7, bonus: 'd16'}],
          [8, {level: 8, bonus: 'd16'}],
          [9, {level: 9, bonus: 'd20'}],
          [10, {level: 10, bonus: 'd20'}],
        ]),
      ],
      [
        'neutral',
        new Map([
          [1, {level: 1, bonus: 'd12'}],
          [2, {level: 2, bonus: 'd12'}],
          [3, {level: 3, bonus: 'd14'}],
          [4, {level: 4, bonus: 'd14'}],
          [5, {level: 5, bonus: 'd16'}],
          [6, {level: 6, bonus: 'd16'}],
          [7, {level: 7, bonus: 'd20'}],
          [8, {level: 8, bonus: 'd20'}],
          [9, {level: 9, bonus: 'd20'}],
          [10, {level: 10, bonus: 'd20'}],
        ]),
      ],
    ]),
  ],
]);

export const features = [
  {name: 'Hit points', description: '1d6{{stamina}} hit points at each level.'},
  {
    name: 'Weapon training',
    description:
      'blackjack, blowgun, crossbow, dagger, dart, garrote, longsword, short sword, sling, and staff. As a thief, you prefer light armor because your armor check penalty affects your skill usage.',
  },
  {
    name: `Thieves' Cant`,
    description: 'You know a secret spoken thief language called cant.',
  },
  {
    name: 'Thieving skills',
    description:
      'You know a set of illicit thieving skills. Backstab, sneak silently, hide in shadows, pick pocket, climb sheer surfaces, pick lock, find trap, disable trap, disguise self, read languages, handle poison, and cast spell from scroll.',
  },
  {
    name: 'Luck and Wits',
    description:
      'You gain a {{luckDie}} bonus to rolls for each luck point burned. You recover luck by +{{level}} per nights rest. Your luck cannot be increased beyond its starting value.',
  },
  {
    name: 'Action dice',
    description: '{{actionDice}}. Your action dice can be used for any action.',
  },
];

// @ts-ignore
export const titles = new Map([
  [
    1,
    new Map([
      ['lawful', 'Bravo'],
      ['neutral', 'Beggar'],
      ['chaotic', 'Thug'],
    ]),
  ],
  [
    2,
    new Map([
      ['lawful', 'Apprentice'],
      ['neutral', 'Cutpurse'],
      ['chaotic', 'Murderer'],
    ]),
  ],
  [
    3,
    new Map([
      ['lawful', 'Rogue'],
      ['neutral', 'Burglar'],
      ['chaotic', 'Cutthroat'],
    ]),
  ],
  [
    4,
    new Map([
      ['lawful', 'Capo'],
      ['neutral', 'Robber'],
      ['chaotic', 'Executioner'],
    ]),
  ],
  [
    5,
    new Map([
      ['lawful', 'Boss'],
      ['neutral', 'Swindler'],
      ['chaotic', 'Assassin'],
    ]),
  ],
]);
