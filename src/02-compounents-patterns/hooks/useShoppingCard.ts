import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/ProductInterfaces";
export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setshoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: {
          ...product,
          count,
        },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
