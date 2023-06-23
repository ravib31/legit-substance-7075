const express = require("express");
const { ProductModel } = require("../models/Products.model");
const CartproductRouter = express.Router();
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth");
const { CartProductModel } = require("../models/cartProduct.model");

CartproductRouter.get("/", auth, async (req, res) => {
  const userId = req.body.USER_ID;

  try {
    const cartsData = await CartProductModel.find({ userID: userId });
    res.status(200).send({ cartsData });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});


CartproductRouter.post("/", auth, async (req, res) => {
  const payload = req.body;
  const userId = req.body.USER_ID;

  try {
    // Associate the user ID with the project
    payload.userID = userId;

    const data = new CartProductModel(payload);
    await data.save();
    res.status(200).send({ msg: "Added to Cart" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message }); 
  }
});

CartproductRouter.patch("/update/:prodID", async (req, res) => {
  const { prodID } = req.params;
  const payload = req.body;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "evaluation");
  const req_id = decoded.userID;
  const product = await ProductModel.find({ _id: prodID });
  const userID_in_product = product[0].userID;

  try {
    if (req_id === userID_in_product) {
      const data = await ProductModel.findByIdAndUpdate(
        { _id: prodID },
        payload
      );
      res
        .status(200)
        .send({ msg: `Product with id:${prodID} has been Updated` });
    } else {
      res
        .status(403)
        .send({ msg: "You are not authorized to Updated the product" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

CartproductRouter.delete("delete/:prodID", async (req, res) => {
  console.log("delete");
  const { prodID } = req.params;
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "evaluation");
  const req_id = decoded.userID;
  const product = await ProductModel.find({ _id: prodID });
  const userID_in_product = product[0].userID;

  console.log(prodID);
  console.log(product); 

  try {
    if (req_id === userID_in_product) {
      const productDeleted = await ProductModel.findByIdAndDelete({
        _id: prodID,
      });
      res
        .status(200)
        .send({ msg: `Product with id:${prodID} has been Deleted` });
    } else {
      res
        .status(403)
        .send({ msg: "You are not authorized to Deleted the product" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { CartproductRouter };
