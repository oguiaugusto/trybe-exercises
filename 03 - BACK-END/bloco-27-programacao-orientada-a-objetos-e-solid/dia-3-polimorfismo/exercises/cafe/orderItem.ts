class OrderItem {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = '';
    this._price = 0;

    this.name = name;
    this.price = price;
  }

  get name() { return this._name; }
  get price() { return this._price; }

  set name(name: string) {
    if (name.length < 3) throw new Error('"name" must be at least 3 characters long');
    this._name = name;
  }
  set price(price: number) {
    if (price < 0) throw new Error('"price" cannot be a negative number');
    this._price = price;
  }
}

export default OrderItem;
