const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQCBLLoTsVSh7HpezD2JBPtCfrctc3usWIGWskiRKGpVveq3XGYuYm2M6d0e9CPdZsr1CjF6owvb51oIg1G1Mqt00DDzB9eS0"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // subunidades de currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
