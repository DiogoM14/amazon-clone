import React from "react";
import moment from "moment";

import { Container } from "./styles";
import CheckoutProduct from "../CheckoutProduct";

function Order({ order }) {
  return (
    <Container>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>Your order id: {order.id}</small>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </Container>
  );
}

export default Order;
