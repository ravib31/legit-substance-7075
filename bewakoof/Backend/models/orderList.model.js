const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  order: Object,
});

const OrderListModel = mongoose.model("order", orderSchema);

module.exports = {
  OrderListModel,
};
