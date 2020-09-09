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

function Index() {
  return (
    <>
      <Header />
      <Container>
        <CheckoutLeft>
          <img src={CheckoutBanner} alt="" />

          <ShoppingBasket>
            <h2>Your shopping Basket</h2>
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
