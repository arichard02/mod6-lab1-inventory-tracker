import { Product } from "./Product.js";

export class DigitalProduct extends Product {
  private fileSize: number;

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

  displayDetails(): string {
  return `${super.displayDetails()}, File size: ${this.getFilesize()}`;
}

}





