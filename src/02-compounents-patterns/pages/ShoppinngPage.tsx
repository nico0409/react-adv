import React from "react";
import {
  ProductBottons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  name: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppinngPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductTitle title={product.name} />
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductBottons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="opcion1" />
          <ProductCard.Bottons />
        </ProductCard>
      </div>
    </div>
  );
};
