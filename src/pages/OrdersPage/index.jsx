import React, { useEffect, useState } from "react";

import Header from "../../components/Header/index.jsx";
import Order from "../../components/Order/index.jsx";

import { db } from "../../services/firebase.js";
import { useStateValue } from "../../store/StateProvider.jsx";

import { Container, Orders } from "./styles";

export default function Index() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <>
      <Header />
      <Container>
        <Orders>
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </Orders>
      </Container>
    </>
  );
}
