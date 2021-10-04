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

const mageDamageAndMana = () => {
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
