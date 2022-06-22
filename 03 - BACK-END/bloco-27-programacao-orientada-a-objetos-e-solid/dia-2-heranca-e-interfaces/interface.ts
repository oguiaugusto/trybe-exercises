interface MyInterface {
  myNumber: number;
  myFunc: (myParam: number) => string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {
    this.myNumber = myNumber;
  }

  myFunc(myParam: number) {
    return `${this.myNumber} + ${myParam} = ${this.myNumber + myParam}`;
  }
}

const myClass = new MyClass(12);
console.log(myClass.myFunc(3));
