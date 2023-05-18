const express = require("express");
const { OrderListModel } = require("../models/orderList.model");
const orderRouter = express.Router();

orderRouter.get("/", async (req, res) => {
  try {
    const data = await OrderListModel.find();
    console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

orderRouter.post("/add", async (req, res) => {
  try {
    const data = await OrderListModel.insertMany(req.body);
    console.log(data);
    res.status(200).send({ msg: "Product Added" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

module.exports = { orderRouter };
