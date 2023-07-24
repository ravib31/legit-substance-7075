// const { instance } = require("../index");
const crypto = require("crypto");
const { Payment } = require("../models/payment.model.js");
const dotenv = require("dotenv");
const Razorpay=require("razorpay")
dotenv.config();
//razerpay configuration
const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});
 const checkout = async (req, res) => {
  const {amount,receipt}=req.body;
  try {
    const options = {
      amount: Number(amount * 100),
      currency: "INR",
      
    };
    const order = await instance.orders.create(options);
     console.log(order);
    res.status(200).json({
      success: true,
      order,
      
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};


 const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

    

  const isAuthentic = expectedSignature === razorpay_signature; 

  if (isAuthentic) {
    // Database comes here

    await Payment.create({
      razorpay_order_id,
      razorpay_payment_id, 
      razorpay_signature,
    });

    // res.status(200).send({"isAuthentic":isAuthentic})
    res.redirect(
      `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`  
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }  
};

module.exports={checkout,paymentVerification}