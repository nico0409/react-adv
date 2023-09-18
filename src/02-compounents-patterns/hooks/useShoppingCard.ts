import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/ProductInterfaces";
export const useShoppingCart = () => {
  const [shoppingCart, setshoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setshoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      /*  if (count === 0) {
         
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
          }
    
          return {
            ...oldShoppingCart,
            [product.id]: {
              ...product,
              count,
            },
          }; */
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
