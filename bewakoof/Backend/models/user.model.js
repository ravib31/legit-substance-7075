const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type:String,
      required:true,
    },
    phone:{
      type:String,
      // required:[true, "Please Enter Your Phone Number"],
      minLength: [10, "Password should have atleast 10 digits"],
    },
    email: {
      type:String,
      required:true,  
    },
    password: {
      type:String,
      required: [true, "Please Enter Your Password"],
      minLength: [8, "Password should have atleast 8 char"],
    },
    avatar:{
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
