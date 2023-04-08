const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    age: Number,
    location: String,
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
