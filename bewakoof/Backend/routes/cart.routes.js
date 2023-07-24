const express = require("express");
const { ProductModel } = require("../models/Products.model");
const CartRouter = express.Router();
const jwt = require("jsonwebtoken");
const { auth } = require("../middlewares/auth");
const { CartProductModel } = require("../models/cart.model");

CartRouter.get("/", auth, async (req, res) => {
  const userId = req.body.USER_ID;

  try {
    const cartsData = await CartProductModel.find({ userID: userId });
    res.status(200).send({ cartsData });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
});

CartRouter.post("/", auth, async (req, res) => {
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

CartRouter.patch("/update/prodID", auth, async (req, res) => {
  const req_id = decoded.userID;
  const product = await CartProductModel.find({ _id: prodID });
  const userID_in_product = product[0].userID;

  try {
    if (req_id === userID_in_product) {
      const data = await CartProductModel.findByIdAndUpdate(
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

CartRouter.delete("/delete/:prodID", auth, async (req, res) => {
  const { prodID } = req.params;
  const req_id = req.body.USER_ID; // ID of the logged-in user

  try {
    const product = await CartProductModel.findById(prodID);

    if (!product) {
      return res.status(404).send({ msg: "Product not found" });
    }

    if (req_id !== product.userID) {
      return res
        .status(403)
        .send({ msg: "You are not authorized to delete the product" });
    }

    const productDeleted = await CartProductModel.findByIdAndDelete(prodID);

    res.status(200).send({
      msg: `Product has been deleted`,
      productDeleted,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});

CartRouter.put("/update/:prodID", auth, async (req, res) => {
  const { prodID } = req.params;
  const { quantity } = req.body;
  const reqUserID = req.body.USER_ID; // ID of the logged-in user

  try {
    const updatedProduct = await CartProductModel.findOneAndUpdate(
      { _id: prodID, userID: reqUserID }, // Find the product matching both ID and user ID
      { $set: { quantity } }, // Update the quantity field with the new value
      { new: true } // Return the updated product
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({
      msg: "Product quantity has been updated",
      updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

CartRouter.get("/totalPrice", auth, async (req, res) => {
  const reqUserID = req.body.USER_ID; // ID of the logged-in user

  try {
    const totalPrice = await CartProductModel.aggregate([
      { $match: { userID: reqUserID } }, // Match documents with the user ID
      {
        $group: {
          _id: null,
          totalPrice: {
            $sum: { $multiply: ["$actualPrice", "$quantity"] },
          },
        },
      }, // Calculate the sum of the "price" field
    ]);

    if (totalPrice.length === 0) {
      return res.status(404).json({ msg: "No products found in the cart" });
    }

    res.status(200).json({ totalPrice: totalPrice[0].totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

CartRouter.get("/totalDiscountPrice", auth, async (req, res) => {
  const reqUserID = req.body.USER_ID; // ID of the logged-in user

  try {
    const totalDiscountPrice = await CartProductModel.aggregate([
      { $match: { userID: reqUserID } }, // Match documents with the user ID
      {
        $group: {
          _id: null,
          totalDiscountPrice: {
            $sum: { $multiply: ["$discountedPrice", "$quantity"] },
          },
        },
      }, // Calculate the sum of the "price" field
    ]);

    if (totalDiscountPrice.length === 0) {
      return res.status(404).json({ msg: "No products found in the cart" });
    }
    console.log(totalDiscountPrice);
    res
      .status(200)
      .json({ totalDiscountPrice: totalDiscountPrice[0].totalDiscountPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});

CartRouter.get("/totalCartProduct", auth, async (req, res) => {
  const reqUserID = req.body.USER_ID; // ID of the logged-in user

  try {
    const totalCartProduct = await CartProductModel.aggregate([
      { $match: { userID: reqUserID } }, // Match documents with the user ID
      {
        $group: {
          _id: null,
          totalCartProduct: { $sum: { $multiply: ["$quantity", 1] } },
        },
      }, // Calculate the sum of quantity multiplied by 1
    ]);

    if (totalCartProduct.length === 0) {
      return res.status(404).json({ msg: "No products found in the cart" });
    }
    console.log(totalCartProduct);
    res
      .status(200)
      .json({ totalCartProduct: totalCartProduct[0].totalCartProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
});


CartRouter.delete("/clearCart",auth,async(req,res)=>{
  try {
    await CartProductModel.deleteMany();
    res.status(200).send({msg:"All products have beeb removed from cart"})
  } catch (error) {
    res.status(500).send({msg:error.message}) 
  }
})

module.exports = { CartRouter };
