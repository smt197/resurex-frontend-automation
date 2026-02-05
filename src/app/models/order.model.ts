export class Order {
  id?: number;
  name: string;

  constructor(order: Order) {
    this.id = order.id || 0;
    this.name = order.name;
  }
}
