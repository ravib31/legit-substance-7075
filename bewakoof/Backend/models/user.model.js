const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type:String,
      required:true,
    },
    email: {
      type:String,
      required:true,
    },
    password: {
      type:String,
      required: [true, "Please Enter Your Password"],
    },
    image:{
      type:String,
      required:true,
      default:"https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
    },
    role:{
       type:String,
       required:true, 
       default:"user"
    },
    isVerified:{
      type:Boolean,
      required:true,
      default:false,
    }
    ,
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
