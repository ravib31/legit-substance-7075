const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const connection = mongoose.connect(process.env.MONGOURL);
const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = { connection }; 





