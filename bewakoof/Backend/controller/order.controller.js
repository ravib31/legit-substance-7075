const { OrderModel } = require("../models/order.model");
const { CartProductModel } = require("../models/cart.model");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const userID = req.body.USER_ID;
    const { products, totalPrice, shippingAddress } = req.body;

    // Check if the products exist in the cart
    const cartProducts = await CartProductModel.find({
      _id: { $in: products },
    });

    if (cartProducts.length !== products.length) {
      return res.status(404).json({ error: "Some products not found in the cart." });
    }

    // Create the order
    const newOrder = await OrderModel.create({
      userID,
      products,
      totalPrice,
      shippingAddress,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the order." });
  }
};

// Get all orders for a specific user
const getUserOrders = async (req, res) => {
  try {
    const userID = req.body.USER_ID;

    // Retrieve all orders for the user
    const userOrders = await OrderModel.find({ userID }).populate("products");

    res.status(200).json(userOrders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user orders." });
  }
};

// Get a specific order by its orderNumber
const getOrder = async (req, res) => {
  try {
    const { orderNumber } = req.params;

    // Retrieve the order by its orderNumber and populate the products field
    const order = await OrderModel.findOne({ orderNumber }).populate("products");

    if (!order) {
      return res.status(404).json({ error: "Order not found." });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch the order." });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderNumber } = req.params;
    const { status } = req.body;

    // Find the order and update its status
    const updatedOrder = await OrderModel.findOneAndUpdate(
      { orderNumber },
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Order not found." });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the order status." });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrder,
  updateOrderStatus,
};
