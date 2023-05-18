const express = require("express");
const { ProductModel } = require("../models/Products.model");
const productRouter = express.Router();
const jwt = require("jsonwebtoken");

productRouter.get("/", async (req, res) => {
  const qSort = req.query;
  console.log(qSort.sort);

  let q;
  if (qSort.sort === "asc") {
    q = 1;
  } else if (qSort.sort === "desc") {
    q = -1;
  }

  try {
    if (req.query.price && req.query.rating) {
      const data = await ProductModel.find({
        $and: [{ $: req.query.price }, { $: req.query.rating }],
      });
      console.log(data);
      res.send(data);
    } else if (req.query.price) {
      const data = await ProductModel.find({
        price: { $gt: req.query.price },
      }).sort({ price: q });
      console.log(data);
      res.send(data);
    } else if (req.query.rating) {
      const data = await ProductModel.find({
        rating: { $gt: req.query.rating },
      }).sort({ rating: q });
      console.log(data);
      res.send(data);
    } else if (req.query.category) {
      const data = await ProductModel.find({ category: req.query.category });
      console.log(data);
      res.send(data);
    } else {
      const data = await ProductModel.find();
      console.log(data);
      res.send(data);
    }
    // res.status(200).send({"msg" : "All data"})
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

productRouter.get("/sort", async (req, res) => {
  const qSort = req.query;
  console.log(qSort.sort);

  let q;
  if (qSort.sort === "asc") {
    q = 1;
  } else if (qSort.sort === "desc") {
    q = -1;
  }
  try {
    const data = await ProductModel.find().sort({ price: q });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

productRouter.get("/search", async (req, res) => {
  const query = req.query;
  console.log(query);

  try {
    const data = await ProductModel.find({
      title: { $regex: query.title, $options: "i" },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

productRouter.post("/add", async (req, res) => {
  try {
    const data = new ProductModel(req.body);
    await data.save();
    // res.send(data)
    res.status(200).send({ msg: "Product Added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

productRouter.patch("/update/:prodID", async (req, res) => {
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

productRouter.delete("delete/:prodID", async (req, res) => {
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

module.exports = { productRouter };
