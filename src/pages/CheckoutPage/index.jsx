import React from "react";

import {
  Container,
  CheckoutLeft,
  ShoppingBasket,
  CheckoutRight,
} from "./styles";
import CheckoutBanner from "../../assets/checkout-banner.jpg";

import Header from "../../components/Header";
import SubTotal from "../../components/SubTotal";
import { useStateValue } from "../../store/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct";

function Index() {
  const [{ basket, user }] = useStateValue();

  return (
    <>
      <Header />
      <Container>
        <CheckoutLeft>
          <img src={CheckoutBanner} alt="" />

          <ShoppingBasket>
            <h3>Hello, {user?.email}</h3>
            <h2>Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </ShoppingBasket>
        </CheckoutLeft>

        <CheckoutRight>
          <SubTotal />
        </CheckoutRight>
      </Container>
    </>
  );
}

export default Index;
