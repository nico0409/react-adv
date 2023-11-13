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
        <ProductCard
          product={product}
          className="bg-dark text-white"
          initialValues={{
            count: 4,
            countMax: 10,
          }}
        >
          {({ reset, count, increaseBy, isMaxCountReached }) => {
            console.log(isMaxCountReached);

            return (
              <>
                <ProductCard.Image className="custom-image" />
                <ProductCard.Title title="opcion1" className="text-white" />
                <ProductCard.Bottons className="custom-buttons" />
                <button onClick={reset}>Reset</button>
                <button onClick={() => increaseBy(2)}>+2</button>
                {isMaxCountReached && (
                  <button onClick={() => increaseBy(-2)}>-2</button>
                )}

                <span>{count}</span>
              </>
            );
          }}
        </ProductCard>
      </div>
    </div>
  );
};
