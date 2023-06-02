const {UserModel}=require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const nodemailer=require("nodemailer");
require('dotenv').config();


//for send mail
const sendVerifyMail=(name,email,user_id)=>{
    try {
       const transporter= nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
              user:'sunilchaudhary7789@gmail.com',
              pass:`${process.env.PASSWORD}`
            }
        })












        const mailOptions={
            from:'sunilchuadhary7789@gmail.com',
            to:email,
            subject:'For Verification mail',
            html:`<p>Hii ${name},please click here to <a href="http://localhost:8080/user/verifiy/?id=${user_id}">Verify</a>your mail </p>`
        }

        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log(err);
            }else{
                console.log(`Email has been sent:- ${info.response}`);
            }
        })

    } catch (error) {
        console.log(error);
    }
}

const verifiyMail=async(req,res)=>{
  console.log("verifiedmail called");
     try {
       const updatedInfo= await UserModel.updateOne({_id:req.query.id},{$set:{isVerified:true}});
       console.log(updatedInfo);
       res.redirect("/login");
     } catch (error) {
        console.log(error);
     }
}

const registerFun=async (req, res) => {
    const { name, email, password, phone, age, location,type, order } = req.body;
  
    const user = await UserModel.findOne({ email });
  
    if (!user) {
      try {
        bcrypt.hash(password, 2, async (err, hash) => {
          let userDetail = new UserModel({
            name,
            email,
            phone,
            password: hash,
            age,
            location, 
           avatar:req.file.filename  
          });
         userDetail= await userDetail.save();
         if(userDetail){
            
            sendVerifyMail(name,email,userDetail._id);

          res.status(200).send({ msg: "User data submitted successfully ,Please verify your mail" });
         }else{
            res.status(401).send({"msg":"Please Register again"})
         }
        });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
    } else if(!user.isVerified){
      res.status(200).send({"msg":"Please check your mail and verify"})
    }else{
      res.status(200).send({msg:"User already exist please login"}) 
    }
  }

  const loginFun=async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      // console.log("user", user)
      if (user.isVerified) {
        bcrypt.compare(password, user.password, async (err, result) => {
          if (result) {
            res.status(200).send({
              msg: "Login Successful",
              token: jwt.sign(
                {
                  USER_ID: user._id,
                },
                "bhashkar"
              ),
              user: user,
            });
          } else {
            res.status(401).send("Wrong Password");
          }
        });
      } else {
        res.status(404).send("No User Found");
      }
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }

//   const AdminloginFun=async (req, res) => {
//     const { name, password } = req.body;
//     try {
//       const user = await UserModel.findOne({ name });
//       if (user) {
//         if (user.type === "ADMIN") {
//           bcrypt.compare(password, user.password, async (err, result) => {
//             if (result) {
//               res.status(200).send({
//                 msg: "Login Successful",
//                 token: jwt.sign(
//                   {
//                     USER_ID: user._id,
//                   },
//                   "evaluation"
//                 ),
//               });
//             } else {
//               res.status(401).send("Wrong Password");
//             }
//           });
//         } else {
//           res.status(401).send("You Cannot Access ADMIN PORTAL");
//         }
//       } else {
//         res.status(404).send("No User Found");
//       }
//     } catch (error) {
//       res.status(400).send({ msg: error.message });
//     }
//   }


//   const Adminuserget=async (req, res) => {
//     const query = req.query;
//     try {
//       const user = await UserModel.find(query);
//       // console.log("user", user)
//       if (user) {
//         res.status(200).send(user);
//       } else {
//         res.status(404).send("No User Found");
//       }
//     } catch (error) {
//       res.status(400).send({ msg: error.message });
//     }
//   }


//   const adminasync (req, res) => {
//     const { id } = req.params;
//     try {
//       const user = await UserModel.find({ _id: id });
//       if (user) {
//         res.status(200).send(user);
//       } else {
//         res.status(404).send("No User Found");
//       }
//     } catch (error) {
//       res.status(400).send({ msg: error.message });
//     }
//   } 

  module.exports={registerFun,loginFun,verifiyMail}