import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "../pages/MainPage/index.jsx";
import LoginPage from "../pages/LoginPage/index.jsx";
import CheckoutPage from "../pages/CheckoutPage/index.jsx";

export default function index() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/" exact component={MainPage} />
      <Route path="/checkout" component={CheckoutPage} />
    </BrowserRouter>
  );
}
