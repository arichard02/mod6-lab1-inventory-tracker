// export class Product {
//   sku: string;
//   name: string;
//   price: number;

//   constructor(sku: string, name: string, price: number) {
//     this.sku = sku;
//     this.name = name;
//     this.price = price;
//   }

//   displayDetails(): string {
//     // return `The product sku : ${this.sku} , The product name is : ${this.name} , the product price is : ${this.price}`;
//     return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price}`;
//   }

//   getPriceWithTax(): number {
//     // const taxAmount = this.price * 0.10;
//     // const totalPrice = this.price + taxAmount;
//     // return totalPrice;
//     return this.price * 1.1;
//   }
// }

// console.log("first", new Product("test", "lorem", 15).displayDetails());
// console.log("sec", new Product("test", "lorem", 12).getPriceWithTax());


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


// console.log("first", new Product("test", "lorem", 12).displayDetails());
// console.log("sec", new Product("test", "lorem", 12).getPriceWithTax());