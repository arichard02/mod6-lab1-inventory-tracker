export class Product {
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(): string {
    return `The product sku : ${this.sku} , The product name is : ${this.name} , the product price is : $${this.price}`;
  }

  getPriceWithTax(): number {
    const taxAmount = this.price * 0.2;
    const totalPrice = this.price + taxAmount;
    return totalPrice;
  }
}


console.log("first", new Product("test", "lorem", 12).displayDetails());
console.log("sec", new Product("test", "lorem", 12).getPriceWithTax());