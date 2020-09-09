import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import CheckoutPage from "../pages/CheckoutPage";

export default function index() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/checkout" component={CheckoutPage} />
    </BrowserRouter>
  );
}
