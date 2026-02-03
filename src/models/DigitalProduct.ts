import { Product } from "./Product.js";

export class DigitalProduct extends Product {
  fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  getPriceWithTax(): number {
    return this.price;
  }

  getFilesize(): string {
    return `${this.fileSize} mb`;
  }
}

console.log(
  "first",
  new DigitalProduct("test", "lorem", 12, 10).displayDetails(),
);

console.log(
  "sec",
  new DigitalProduct("test", "lorem", 12, 10).getPriceWithTax(),
);

console.log("sec", new DigitalProduct("test", "lorem", 12, 10).getFilesize());