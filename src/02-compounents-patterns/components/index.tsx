import { ProductBottons } from "./ProductBottons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

import { ProductCard as hocProduct } from "./ProductCard";
import { ProductPropHOC } from "../interfaces/ProductInterfaces";

export { ProductBottons } from "./ProductBottons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductPropHOC = Object.assign(hocProduct, {
  Bottons: ProductBottons,
  Image: ProductImage,
  Title: ProductTitle,
});

export default ProductCard;
