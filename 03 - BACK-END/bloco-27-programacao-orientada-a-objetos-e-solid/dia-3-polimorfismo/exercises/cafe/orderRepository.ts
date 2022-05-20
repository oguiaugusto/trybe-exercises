import Person from '../person';
import Student from '../school/student';
import Subject from '../school/subject';
import Teacher from '../school/teacher';
import Order from './order';
import OrderItem from './orderItem';

class OrderRepository {
  public orders: Order[] = [];

  public addOrder(order: Order) {
    this.orders.push(order);
  }

  public removeOrder(order: Order) {
    const newList = this.orders.filter(({ id }) => id !== order.id);
    this.orders = newList;
  }

  public listByClient(customer: Person) {
    return this.orders.filter((o) => o.customer === customer);
  }

  public listBySortedValue(value: 'highest' | 'lowest') {
    return this.orders.sort((a, b) => {
      if (a.calculateTotalWithDiscount() > b.calculateTotalWithDiscount()) {
        return (value === 'lowest') ? 1 : -1;
      }
      if (a.calculateTotalWithDiscount() < b.calculateTotalWithDiscount()) {
        return (value === 'lowest') ? -1 : 1;
      }
      return 0;
    });
  }
}

export default OrderRepository;
