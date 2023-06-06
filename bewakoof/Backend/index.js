const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config();
const { auth } = require("../Backend/middlewares/auth")
const { connection } = require("./config/db");
const { productRouter } = require("./routes/products.routes");
const { userRouter } = require("./routes/user.routes");
const { CartproductRouter } = require("./routes/cartProducts.routes");
const { orderRouter } = require("./routes/orderList.routes");


const app = express()

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }));
app.use(cors())


app.use("/user", userRouter)
// app.use(auth)
app.use("/products", productRouter)
app.use("/cart", CartproductRouter)
app.use("/order" , orderRouter)



app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log( "Connected to MongoDb")

    } catch (error) {
        console.log("Cannot connect to MongoDb")
    }
    console.log(`Server running on port ${process.env.PORT}`)
})


