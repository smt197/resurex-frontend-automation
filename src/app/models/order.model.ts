export class Order {
  id?: number;
  name: string;
  description?: string;

  constructor(order: Order) {
    this.id = order.id || 0;
    this.name = order.name;
    this.description = order.description || '';
  }
}
