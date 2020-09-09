import React from "react";

import { Container, ProductInfo } from "./styles";
import { useStateValue } from "../../store/StateProvider";

export default function Index({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //  Envia o item para a dataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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

      <button onClick={addToBasket}>Add to basket</button>
    </Container>
  );
}
