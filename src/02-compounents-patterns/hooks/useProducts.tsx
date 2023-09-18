import { useState, useEffect } from "react";
import { Product, onChangeArgs } from "../interfaces/ProductInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProducts = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ product, count: newValue });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
