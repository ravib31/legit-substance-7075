const express =require("express");
const  {checkout, paymentVerification}= require("../controller/payment.controller")
const dotenv = require("dotenv");
dotenv.config();

const paymentRouter = express.Router();

paymentRouter.post("/checkout",checkout)

paymentRouter.post("/paymentverification",paymentVerification)

paymentRouter.get("/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
); 

module.exports = {paymentRouter};
