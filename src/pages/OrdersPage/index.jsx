import React from "react";

import Header from "../../components/Header/index.jsx";

import { Container } from "./styles";

export default function index() {
  return (
    <>
      <Header />
      <Container>
        <h1>Orders</h1>
      </Container>
    </>
  );
}
