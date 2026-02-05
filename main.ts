import { DigitalProduct } from "./models/DigitalProduct.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import {Product} from "./models/Product.js";
import { calculateTax } from "./utils/taxCalculator.js";

const physicalProduct = new PhysicalProduct("gum-12", "gum", 10, 20);
const digitalProduct = new DigitalProduct("book-10", "e-book", 10, 30);

const products: Product[] = [physicalProduct, digitalProduct];

products.forEach((product) => {
  console.log(product.displayDetails());
  console.log("calculate prices with tax", calculateTax(product));
  console.log(".......");
});

