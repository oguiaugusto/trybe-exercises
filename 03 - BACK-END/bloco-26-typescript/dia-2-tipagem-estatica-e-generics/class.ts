interface Dog {
  _name: string;
  _age: number;
  walk(): void;
  sit(): void;
};

class Dog {
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  sit() {
    console.log(`${this._name} is sitting`);
  }
};

interface House {
  _owner: string;
  _address: string;
};

class House {
  constructor(owner: string, address: string) {
    this._owner = owner;
    this._address = address;
  }
};

const dog: Dog = new Dog('Max', 2);
const house: House = new House('John', 'Pear Street, 5');

console.log(dog);
console.log(house);