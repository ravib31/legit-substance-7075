const express = require("express");
const OrderRouter = express.Router();

// Import the order controller and auth middleware
const {createOrder,getUserOrders,getOrder,updateOrderStatus} = require("../controller/order.controller");
const { auth } = require("../middlewares/auth");

// Route to create a new order
OrderRouter.post("/new", auth, createOrder);

// Route to get all orders for a specific user
OrderRouter.get("/", auth, getUserOrders);

// Route to get a specific order by its orderNumber
OrderRouter.get("/:orderNumber", auth, getOrder);

// Route to update order status
OrderRouter.patch( "/:orderNumber/status", auth, updateOrderStatus);

module.exports = { OrderRouter };
 