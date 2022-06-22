class Superclass {
  public isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  protected sayHello() { console.log('Hello, world!'); }
}

class Subclass extends Superclass {
  constructor(public value?: string) {
    super();

    this.value = value;
  }

  saySomething() {
    if (!this.value) this.sayHello();
    else console.log(this.value);
  }
}

const myFunc = (superclass: Subclass) => {
  superclass.saySomething();
}

const sub = new Subclass('Wake up!');

myFunc(sub);