class Customer {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Item {
  public name: string;
  public price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  private _customer: Customer;
  private _paymentMethod: string;
  private _discount?: number;
  public items: Item[];

  constructor(customer: Customer, paymentMethod: string, items: Item[], discount?: number) {
    this._customer = customer;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
    this.items = items;
  }

  get customer() { return this._customer; }
  get paymentMethod() { return this._paymentMethod; }
  get discount() { return this._discount; }

  set customer(customer: Customer) { this._customer = customer; }
  set paymentMethod(method: string) { this._paymentMethod = method; }
  set discount(value: number | undefined) {
    if (value) {
      if (value * 1 >= 1 || value < 0) {
        throw new Error('discount must be between 0 and 1');
      }
    }
    this._discount = value;
  }

  public getTotal(): number {
    return this.items.reduce((totalPrice: number, { price }) => (
      totalPrice + price
    ), 0);
  }

  public getTotalOff(): number {
    const totalPrice = this.getTotal()
    const discount = this.discount || 1;
    const discountValue = totalPrice * discount;
    return totalPrice - discountValue;
  }
}

const chicken = new Item('Chicken', 20);
const rice = new Item('Rice', 15);
const john = new Customer('John Doe');
const order1 = new Order(john, 'money', [chicken, rice], 0.15);

console.log(order1.getTotal());
console.log(order1.getTotalOff());
