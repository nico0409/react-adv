import { Product } from "./interfaces/ProductInterfaces";

const product = {
  id: "1",
  name: "Coffee Mug",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  name: "Coffee Mug meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

export default products;
