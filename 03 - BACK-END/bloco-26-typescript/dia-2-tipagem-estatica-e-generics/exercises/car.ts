enum Colors {
  Black = 'preto',
  White = 'branco',
  Red = 'vermelho',
  Silver = 'prata',
};

enum Doors {
  Driver = 'do motorista',
  Ride = 'da carona',
  BehindDriver = 'de trás do motorista',
  BehindRide = 'de trás da carona',
};

enum Directions {
  Left = 'esquerda',
  Right = 'direita',
};

interface Car {
  _brand: string,
  _color: Colors,
  _doors: number,
};

class Car {
  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk() { console.log('Bi Bi!'); }
  // meu deus

  openTheDoor(door: Doors): void { console.log(`Porta ${door} aberta`); }

  closeTheDoor(door: Doors): void { console.log(`Porta ${door} fechada`); }

  turnOn(): void { console.log('Carro ligado'); }

  turnOff(): void { console.log('Carro desligado'); }

  speedUp(): void { console.log('Carro acelerando...'); }

  speedDown(): void { console.log('Carro desacelerando...'); }

  stop(): void { console.log('Carro parado'); }

  turn(direction: Directions): void { console.log(`Carro virando para a ${direction}`); }
};

const car = new Car('Volkswagen Gol', Colors.Silver, 4);
car.openTheDoor(Doors.Driver);
car.closeTheDoor(Doors.Driver);
car.turnOn();
car.speedUp();
car.speedDown();
car.turn(Directions.Left);
car.speedUp();
car.speedDown();
car.turn(Directions.Right);
car.speedUp();
car.speedDown();
car.turn(Directions.Right);
car.speedUp();
car.speedDown();
car.turnOff();

car.openTheDoor(Doors.BehindRide);
car.speedUp();
car.speedDown();
car.turn(Directions.Right);
car.speedUp();
car.speedDown();
car.turn(Directions.Left);
car.speedUp();
car.speedDown();
car.turn(Directions.Right);
car.speedUp();
car.speedDown();
car.openTheDoor(Doors.BehindRide);
car.closeTheDoor(Doors.BehindRide);
