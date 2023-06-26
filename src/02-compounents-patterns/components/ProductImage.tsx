import { useContext } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { ProductContext } from "./ProductCard";

export interface Props {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ image = "", className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={image ? image : product.img ? product.img : noImage}
      alt="product"
    />
  );
};

export default ProductImage;
