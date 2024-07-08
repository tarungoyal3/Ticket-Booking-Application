const functions = require("firebase-functions");
const admin = require("firebase-admin");
const Razorpay = require("razorpay");
const express = require("express");
const cors = require("cors");
admin.initializeApp();
const app = express();
app.use(cors({origin: true}));
const razorpay = new Razorpay({
  key_id: functions.config().razorpay.key_id,
  key_secret: functions.config().razorpay.key_secret,
});
app.post("/create-order", async (req, res) => {
  const amount = req.body.amount;

  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post("/verify-payment", (req, res) => {
  const {orderId, paymentId, signature} = req.body;
  const crypto = require("crypto");
  const hmac = crypto.createHmac(
      "sha256",
      functions.config().razorpay.key_secret);
  hmac.update(orderId + "|" + paymentId);
  const generatedSignature = hmac.digest("hex");
  if (generatedSignature === signature) {
    res.send({status: "success"});
  } else {
    res.status(400).send({status: "failure"});
  }
});

exports.api = functions.https.onRequest(app);
