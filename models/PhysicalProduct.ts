import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  // displayDetails(): string {
  //   return super.displayDetails();
  // }

  getPriceWithTax(): number {
    // const taxAmount = this.price * 0.1;
    // const totalPrice = this.price + taxAmount;
    return this.price * 1.1;
  }

  getWeight(): string {
    return `${this.weight} kg`;
  }

  displayDetails(): string {
  return `${super.displayDetails()}, Weight: ${this.getWeight()}`;
}

}




