import { createContext } from "react";
import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProducts";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/ProductInterfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProducts();
  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
