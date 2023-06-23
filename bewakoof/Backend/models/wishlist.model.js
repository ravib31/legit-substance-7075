const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
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
},
{
  versionKey: false,
});

const WishlistModel = mongoose.model("WishlistProduct", wishlistSchema);

module.exports = { WishlistModel };
