const mongoose = require("mongoose");

const CartProductSchema = mongoose.Schema({
  type: String,
  image: String,
  title: String,
  category: String,
  actualPrice: Number,
  loyaltyPrice: Number,
  discountedPrice: Number,
  fit: String,
  rating: Number,
  userID: String,
},
{
  versionKey: false,
});

const CartProductModel = mongoose.model("Cartproduct", CartProductSchema);

module.exports = { CartProductModel };
