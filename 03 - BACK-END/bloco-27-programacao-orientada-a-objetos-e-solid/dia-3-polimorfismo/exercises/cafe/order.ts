import * as crypto from 'crypto';
import Person from '../person';
import OrderItem from './orderItem';

type PaymentMethod = 'Money' | 'Card' | 'Ticket';

class Order {
  readonly id: string;
  public customer: Person;
  public paymentMethod: PaymentMethod;
  private _items: OrderItem[];
  private _discount: number;

  constructor(
    customer: Person,
    items: OrderItem[],
    paymentMethod: PaymentMethod,
    discount: number = 0
  ) {
    this.id = crypto.randomBytes(8).toString('hex');
    this._items = [];
    this._discount = 0;
    
    this.customer = customer;
    this.paymentMethod = paymentMethod;
    this.items = items;
    this.discount = discount;
  }

  get items() { return this._items; }
  get discount() { return this._discount; }

  set items(items: OrderItem[]) {
    if (items.length === 0) throw new Error('"items" must have at least 1 item');
    this._items = items;
  }
  set discount(value: number) {
    if (value * 1 >= 1 || value < 0) {
      throw new Error('"discount" must be between 0 and 1');
    }
    this._discount = value;
  }

  public calculateTotal() {
    return this.items.reduce((totalPrice: number, { price }) => (
      totalPrice + price
    ), 0);
  }

  public calculateTotalWithDiscount() {
    const total = this.calculateTotal();
    return total - (total * this._discount);
  }
}

// const potato = new OrderItem('Potato', 10);
// const o1 = new Order(new Student('John', new Date('June 07, 1997')), [potato], 'Card', 0.1);

// console.log(o1.calculateTotal());
// console.log(o1.calculateTotalWithDiscount());

export default Order;
