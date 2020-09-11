import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Container } from "./styles";

import Header from "../../components/Header/index.jsx";
import Payment from "../../components/Payment/index.jsx";

const promise = loadStripe(
  "pk_test_51HQCBLLoTsVSh7Hp99aJpVYy9KeO1kQCgq1eVqI4tYdsjWiriGZIEC8ERMGk19GUn34Bh8oMktq9L9F3tOwxSaGW00OdhH9puC"
);

export default function index() {
  return (
    <>
      <Header />
      <Container>
        <Elements stripe={promise}>
          <Payment />
        </Elements>
      </Container>
    </>
  );
}
