import React from "react";
import {
  ProductBottons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-style.css";

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
        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle />
          <ProductBottons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title title="opcion1" className="text-white" />
          <ProductCard.Bottons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductCard.Image
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductCard.Title title="opcion1" style={{ fontWeight: "bold" }} />
          <ProductCard.Bottons
            style={{ display: "flex", justifyContent: "end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
