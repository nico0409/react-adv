import { useState, useEffect, useRef } from "react";
import { InitialValues } from "../interfaces/ProductInterfaces";
import { Product, onChangeArgs } from "../interfaces/ProductInterfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  // console.log("ini", initialValues);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    console.log(value, counter, initialValues?.countMax);

    const newValue = Math.max(counter + value, 0);
    initialValues?.countMax
      ? initialValues?.countMax >= newValue && setCounter(newValue)
      : setCounter(newValue);

    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    console.log("entre");

    setCounter(initialValues?.count || value);
  };
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.countMax && initialValues?.countMax === counter,
    maxcount: initialValues?.countMax,
    increaseBy,
    reset,
  };
};
