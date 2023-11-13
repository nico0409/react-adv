import React, { ReactElement } from "react";
import { Props as PropsButtons } from "../components/ProductBottons";
import { Props as PropsImage } from "../components/ProductImage";
import { Props as PropsTitle } from "../components/ProductTitle";

export interface ProductCardProps {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export interface Product {
  id: string;
  name: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  maxcount?: number;
  increaseBy: (value: number) => void;
}

export interface ProductPropHOC {
  ({ product, children }: ProductCardProps): JSX.Element;
  Bottons: (Props: PropsButtons) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  countMax?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
