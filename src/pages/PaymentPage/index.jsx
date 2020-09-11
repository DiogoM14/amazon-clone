import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header/index.jsx";
import Payment from "../../components/Payment/index.jsx";

export default function index() {
  return (
    <>
      <Header />
      <Container>
        <Payment />
      </Container>
    </>
  );
}
