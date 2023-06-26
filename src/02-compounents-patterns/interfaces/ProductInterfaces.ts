import React, { ReactElement } from "react";
import { Props as PropsButtons } from "../components/ProductBottons";
import { Props as PropsImage } from "../components/ProductImage";
import { Props as PropsTitle } from "../components/ProductTitle";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export interface Product {
  id: string;
  name: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductPropHOC {
  ({ product, children }: ProductCardProps): JSX.Element;
  Bottons: (Props: PropsButtons) => JSX.Element;
  Image: (Props: PropsImage) => JSX.Element;
  Title: (Props: PropsTitle) => JSX.Element;
}
