const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  userID: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart", // Refers to the CartProductModel defined previously
      required: true,
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  shippingAddress: {
    // Define the shipping address fields here
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered"],
    default: "Pending",
  },
},
{
  versionKey: false,
});

const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = { OrderModel }; 
