export class DiceRoll {
  // attack or damage
  type = '';
  // attack name eg. Melee Attack
  name = '';
  // attack description eg. Foofi makes a melee attack with a longsword
  description = '';

  // roll details
  roll = {
    // number of dice to roll
    qty: 1,
    // number of die sides
    die: 20,
    // any modifier to the die roll
    mod: +0,
    // manual attack die adjustment up or down the dice chain
    // not sure this needs to be included
    attackDieAdjustment: 0,
    // if weapon supports double damage while mounted charging,
    // and mounted and charging are checked, set this to 2
    damageMultiplier: 1,
  };

  // weapon details
  weapon = {
    // melee or missile
    type: 'melee',
    // name of the weapon. Needs to be correctly spelt and capitalised as per DCC rulebook
    name: '',
    // how the weapon is being wielded
    wielding: '',
    // blackjack should automatically turn this on, turning it off should disable the weapon
    // other weapons are not affected by this checkbox
    subdualDamage: false,
    // range the weapon is being shot at if missile fire, short, medium, long
    range: '',
  };

  // various conditions that may have affected the selection of die and modifier
  conditions = {
    attacker: {
      invisible: false,
      onHigherGround: false,
      squeezing: false,
      entangled: false,
      untrained: false,
      mounted: false,
      charging: false,
      sneakAttacking: false,
      firingIntoMelee: false,
    },
    opponent: {
      behindCover: false,
      blinded: false,
      entangled: false,
      helpless: false,
      prone: false,
    },
  };
}

export const diceChain = [
  'd3',
  'd4',
  'd5',
  'd6',
  'd7',
  'd8',
  'd10',
  'd12',
  'd14',
  'd16',
  'd20',
  'd24',
  'd30',
];
