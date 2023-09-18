import { createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProducts";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/ProductInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProducts({ product, onChange, value });
  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
