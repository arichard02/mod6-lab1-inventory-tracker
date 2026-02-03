import { DigitalProduct } from "./models/DigitalProduct.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";

const physicalProduct = new PhysicalProduct("gum-12", "gum", 10, 20);
const digitalProduct = new DigitalProduct("book-10", "e-book", 10, 30);

const arr = [physicalProduct, digitalProduct];

arr.forEach((element) => {
  console.log("Details", element.displayDetails());
  let finalPrice = calculateTax(element);
  console.log("calculate prices with tax", finalPrice);
  console.log(
    `The price is ${element.price} and the final price after tax for ${element.sku}${element.name} will be ${finalPrice}`,
  );
});