import React, { useEffect, useState } from "react";

import Header from "../../components/Header/index.jsx";
import { db } from "../../services/firebase.js";
import { useStateValue } from "../../store/StateProvider.jsx";

import { Container } from "./styles";

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
        <h1>Orders</h1>
      </Container>
    </>
  );
}
