abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  talk() { console.log('Melee is talking'); }
  specialMove() { console.log('Melee specialMove'); }
}

class LongRangeCharacter extends Character {
  talk() { console.log('LongRange is talking'); }
  specialMove() { console.log('LongRange specialMove'); }
}

function main(character: Character) {
  character.talk();
  character.specialMove();
}

main(new MeleeCharacter());
