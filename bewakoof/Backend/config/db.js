const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connection = mongoose.connect(
  "mongodb+srv://ravi:bhashkar@cluster0.gr1lnxe.mongodb.net/bewkoof?retryWrites=true&w=majority"
);
module.exports = { connection };
