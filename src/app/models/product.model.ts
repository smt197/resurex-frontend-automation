export class Product {
  id?: number;
  name: string;
  price: number;

  constructor(product: Product) {
    this.id = product.id || 0;
    this.name = product.name;
    this.price = product.price;
  }
}
