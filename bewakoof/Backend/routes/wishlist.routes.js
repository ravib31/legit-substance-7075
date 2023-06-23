const express = require("express");
const { ProductModel } = require("../models/Products.model");
const WishlistRouter = express.Router();
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth");
const { WishlistModel } = require("../models/wishlist.model");

WishlistRouter.get("/", auth, async (req, res) => {
  const userId = req.body.USER_ID;

  try {
    const wishlistData = await WishlistModel.find({ userID: userId });
    res.status(200).send({ WishlistModel });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});


WishlistRouter.post("/", auth, async (req, res) => {
  const payload = req.body;
  const userId = req.body.USER_ID;

  try {
    // Associate the user ID with the project
    payload.userID = userId;

    const data = new WishlistModel(payload);
    await data.save();
    res.status(200).send({ msg: "Product has been added to the wishlist" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message }); 
  }
});