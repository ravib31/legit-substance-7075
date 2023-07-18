const express = require("express");

const userRouter = express.Router();
const {registerFun,loginFun,verifiyMail,}=require("../controller/user.controller")
const multer=require("multer");
const path=require("path");
const { auth } = require("../middlewares/auth");

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
   cb(null,path.join(__dirname,"../public/userProfileImages"))
  },
  filename:(req,file,cb)=>{
    const name=Date.now()+"-"+file.originalname;
    cb(null,name);
  }
})

const upload=multer({storage:storage}); 

userRouter.post("/register",upload.single("avatar"),registerFun ); 
userRouter.post("/login", loginFun);
userRouter.get("/verifiy",verifiyMail)



// userRouter.post("/Adminlogin", );

// userRouter.get("/Adminuserget", );

// userRouter.get("/Adminuserget/:id", );

module.exports = {
  userRouter, 
};
