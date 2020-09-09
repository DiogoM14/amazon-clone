import React from "react";

import { Container, HomeContainer, HomeRow } from "./styles";

import Product from "../Product";

import HomeBanner from "../../assets/home-banner.jpg";

export default function index() {
  return (
    <Container>
      <HomeContainer>
        <img src={HomeBanner} alt="" />

        <HomeRow>
          <Product />
          <Product />
        </HomeRow>
        <HomeRow>
          <Product />
          <Product />
          <Product />
        </HomeRow>
        <HomeRow>
          <Product />
        </HomeRow>
      </HomeContainer>
    </Container>
  );
}
