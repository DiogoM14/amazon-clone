import React from "react";

import { Container, ProductInfo } from "./styles";

function CheckoutProduct({ id, image, title, price, rating }) {
  const removeFromBasket = () => {};

  return (
    <Container>
      <img src={image} />

      <ProductInfo>
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </ProductInfo>
    </Container>
  );
}

export default CheckoutProduct;
