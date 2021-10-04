// Parte I - Game Actions Simulator
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  const minValue = 15;
  const maxValue = battleMembers.dragon.strength;
  const randomDamage = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomDamage;
};

const warriorDamage = () => {
  const minValue = battleMembers.warrior.strength;
  const maxValue = minValue * battleMembers.warrior.weaponDmg;
  const randomDamage = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomDamage;
};

const mageDamage = () => {
  const turnInfo = {};
  const minDValue = battleMembers.mage.intelligence;
  const maxDValue = minDValue * 2;
  const randomDamage = Math.floor(Math.random() * (maxDValue - minDValue + 1)) + minDValue;
  turnInfo.turnDamage = randomDamage;

  if (battleMembers.mage.mana < 15) {
    turnInfo.turnDamage = 'Not enough mana';
    turnInfo.spentMana = 0;
  } else {
    turnInfo.spentMana = 15;
  }
  return turnInfo;
};

// Parte II

const gameActions = {
  warriorTurn: (wDamage) => {
    const damageValue = wDamage();
    battleMembers.dragon.healthPoints -= damageValue;
    battleMembers.warrior.damage = damageValue;
  },
  mageTurn: (mTurn) => {
    const damageValue = mTurn().turnDamage;
    if (Number.isNaN(damageValue)) return;
    battleMembers.dragon.healthPoints -= damageValue;
    battleMembers.mage.damage = damageValue;
    battleMembers.mage.mana -= mTurn().spentMana;
  },
  dragonTurn: (dTurn) => {
    const damageValue = dTurn();
    battleMembers.warrior.healthPoints -= damageValue;
    battleMembers.mage.healthPoints -= damageValue;
    battleMembers.dragon.damage = damageValue;
  },
  currentGame: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.currentGame());
