const mongoose = require("mongoose");

const CartProductSchema = mongoose.Schema({
  checkId:String,
  type: String,
  image: String,
  title: String,
  category: String,
  actualPrice: Number,
  loyaltyPrice: String,
  discountedPrice: Number,
  fit: String,
  rating: Number,
  userID: String,
  size:[String],
  selectedSize:String
},
{
  versionKey: false,
});

const CartProductModel = mongoose.model("Cartproduct", CartProductSchema);

module.exports = { CartProductModel };
