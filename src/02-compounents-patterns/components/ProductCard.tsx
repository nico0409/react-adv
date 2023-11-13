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
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxcount, isMaxCountReached, reset } =
    useProducts({
      product,
      onChange,
      value,
      initialValues,
    });
  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxcount: maxcount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.countMax,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
