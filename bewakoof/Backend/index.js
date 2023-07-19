const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();
const { auth } = require("../Backend/middlewares/auth")
const { connection } = require("./config/db");
const cookieSession = require("cookie-session");

const {setupGoogleStrategy}=require("./config/google.auth")

const { productRouter } = require("./routes/products.routes");
const { userRouter } = require("./routes/user.routes");
const { CartRouter } = require("./routes/cart.routes");
const {paymentRouter} =require("./routes/payment.routes")
const passport=require("passport");
const { OrderRouter } = require("./routes/order.routes");
const app = express()
 
//middlewares
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(
  cookieSession({
    name: "session",
    keys: ["secret-key"],
    maxAge: 30 * 60 * 1000, // Cookie expiration time (30 minute)
  })
);




//google authentication with passport js
setupGoogleStrategy(passport)

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email","phone"] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {  
    // Successful authentication, redirect home.
    console.log(req.user);
    res.json(req.user);
    res.redirect('/');
  });

app.use("/user", userRouter)
app.use("/products", productRouter)
app.use("/cart", CartRouter)
app.use("/payment",paymentRouter) 
app.use("/orders",OrderRouter)



//server runnig on port 8080
app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log( "Connected to MongoDb")

    } catch (error) {
        console.log("Cannot connect to MongoDb")
    }
    console.log(`Server running on port ${process.env.PORT}`)
})




