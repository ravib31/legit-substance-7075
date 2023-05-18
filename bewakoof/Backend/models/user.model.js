const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type:String,
      require:true,
    },
    email: {
      type:String,
      require:true,
    },
    password: {
      type:String,
      require:true,
    },
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
