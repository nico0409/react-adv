import { ReactElement } from "react";


export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface Product {
  id: string;
  name: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductPropHOC{
  ({ product, children }: ProductCardProps) : JSX.Element,
  Bottons: () => JSX.Element;
  Image: ({ image }: {
      image?: string | undefined;
  }) => JSX.Element;
  Title: ({ title }: {
      title?: string | undefined;
  }) => JSX.Element;
}