import React from "react";

import { Container, ProductInfo } from "./styles";

export default function index({ id, title, image, price, rating }) {
  return (
    <Container>
      <ProductInfo>
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </ProductInfo>
      <img src={image} alt="" />

      <button>Add to basket</button>
    </Container>
  );
}
