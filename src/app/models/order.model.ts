export class Order {
  id?: number;
  name: string;
  position: number;

  constructor(order: Order) {
    this.id = order.id || 0;
    this.name = order.name;
    this.position = order.position;
  }
}
