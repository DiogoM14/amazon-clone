import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/index.jsx";
import LoginPage from "../pages/LoginPage/index.jsx";
import CheckoutPage from "../pages/CheckoutPage/index.jsx";
import PaymentPage from "../pages/PaymentPage/index.jsx";

export default function index() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/payment" component={PaymentPage} />
    </BrowserRouter>
  );
}
