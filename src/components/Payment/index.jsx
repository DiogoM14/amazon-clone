import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "axios";

import { Container, PaymentContainer, Form } from "./styles";

import CheckoutProduct from "../CheckoutProduct/index.jsx";
import { useStateValue } from "../../store/StateProvider";
import { getBasketTotal } from "../../store/reducer";

export default function Index() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret, disabled, setDisabled] = useState(true);

  useEffect(() => {
    // gera um stripe secrete especial que aprova o carregamento do comprador

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe espera o total em subunidades
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    // const payload = await stripe
  };

  const handleChange = (event) => {
    // Ouve as alterações no CardElement
    // mostra os erros

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <Container>
      <PaymentContainer>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 R. Boavista</p>
            <p>Porto, Portugal</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <Form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </Form>
          </div>
        </div>
      </PaymentContainer>
    </Container>
  );
}
