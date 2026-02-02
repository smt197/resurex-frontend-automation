export class Product {
  id?: number;
  name: string;

  constructor(product: Product) {
    this.id = product.id || 0;
    this.name = product.name;
  }
}
