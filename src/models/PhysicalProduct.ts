import { Product } from "./Product.js";

export class PhysicalProduct extends Product {
  weight: number;

  constructor(
    sku: string, 
    name: string, 
    price: number, 
    weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  // displayDetails(): string {
  //   return super.displayDetails();
  // }

  // getPriceWithTax(): number {
  //   const taxAmount = this.price * .1;
  //   const totalPrice = this.price + taxAmount;
  //   return totalPrice;
  // }

  getWeight(): string {
    return `${this.weight} kg`;
  }
}

console.log(
  "first",
  new PhysicalProduct("test", "lorem", 12, 10).displayDetails(),
);
console.log(
  "sec",
  new PhysicalProduct("test", "lorem", 12, 10).getPriceWithTax(),
);
console.log("sec", new PhysicalProduct("test", "lorem", 12, 10).getWeight());