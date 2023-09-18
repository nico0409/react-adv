/**
 * @component ShoppinngPage
 * @description A page component that displays a list of products and a shopping cart.
 * @returns {JSX.Element} The ShoppinngPage component
 */
import React, { useState } from "react";
import {
  ProductBottons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import { useShoppingCart } from "../hooks/useShoppingCard";
import products from "../data";
import "../styles/custom-style.css";

export const ShoppinngPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title title="opcion1" className="text-white" />
            <ProductCard.Bottons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shoping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Bottons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
