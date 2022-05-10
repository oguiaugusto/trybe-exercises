class ProcessIdentity<T, U> {
  _value: T;
  _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
};

let processor = new ProcessIdentity<number, string>(100, 'Olá');