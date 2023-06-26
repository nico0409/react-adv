import { useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ image = "" }) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={styles.productImg}
      src={image ? image : product.img ? product.img : noImage}
      alt="product"
    />
  );
};

export default ProductImage;
