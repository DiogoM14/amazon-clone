import React from "react";

import { Container, ProductInfo } from "./styles";

export default function index() {
  return (
    <Container>
      <ProductInfo>
        <p className="product__title">Dell XPS 15</p>
        <p className="product__price">
          <small>$</small>
          <strong>149.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </ProductInfo>
      <img
        src="https://imagens.canaltech.com.br/produto/1578685050-7479-principal-m.png"
        alt=""
      />

      <button>Add to basket</button>
    </Container>
  );
}
