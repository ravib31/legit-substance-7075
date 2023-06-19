const GoogleStrategy = require('passport-google-oauth20').Strategy;
require("dotenv").config();
const e = require('express');
const {userModel, UserModel}=require("../models/user.model")

const setupGoogleStrategy = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async function (accessToken, refreshToken, profile, cb) {
        
        const {name,picture,email,email_verified}=profile._json
        const user= await UserModel.findOne({email})
        try {
          if(user){
            cb(null,user)
          }else{
            
          }
        } catch (error) {
          res.status(500).send({error:error.message})
        }
        console.log("profile",profile);
      }
    )
  );
};

module.exports = { setupGoogleStrategy };

// name,
// email,
// phone,
// password: hash,
// age,
// location, 
// roll,
// isVerified
// avatar:req.file.filename  


// _json: {
//   sub: '100304741239933079794',
//   name: 'Sunil Chaudhary',
//   given_name: 'Sunil',
//   family_name: 'Chaudhary',
//   picture: 'https://lh3.googleusercontent.com/a/AAcHTteD_rbRGMEY0jwi83qQe6bMNYJy2v-7rRpVIwgX0g=s96-c',
//   email: 'sunilchaudhary7789@gmail.com',
//   email_verified: true,
//   locale: 'en-GB'
// }
// }