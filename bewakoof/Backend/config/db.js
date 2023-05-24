const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const connection = mongoose.connect("mongodb+srv://ravi:bhashkar@cluster0.gr1lnxe.mongodb.net/bewkoof?retryWrites=true&w=majority");
const connection = mongoose.connect("mongodb+srv://sunilchaudhary:sunilchaudhary@cluster0.pf95sdj.mongodb.net/bewkoof-data?retryWrites=true&w=majority");
module.exports = { connection }; 


