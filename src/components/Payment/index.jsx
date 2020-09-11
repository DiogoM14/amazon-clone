import React from "react";
import { Link } from "react-router-dom";

import { Container, PaymentContainer } from "./styles";

import CheckoutProduct from "../CheckoutProduct/index.jsx";
import { useStateValue } from "../../store/StateProvider";

export default function Index() {
  const [{ basket, user }, dispatch] = useStateValue();

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
          <div className="payment__details"></div>
        </div>
      </PaymentContainer>
    </Container>
  );
}
