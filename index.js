const express=require('express');
const dotenv=require('dotenv');
const bodyparser=require("body-parser");
const cookieParser=require("cookie-parser");
const connect=require('./db/dbConnection');
const { notFound, errorHandle } = require("./middleware/errorHandler.js");
const userRoutes =require('./routes/user.routes') ;
const authRoutes =require ('./routes/auth.routes');
const shopRoutes =require('./routes/shop.routes') ;
const productRoutes =require( './routes/product.routes');
const orderRoutes =require('./routes/order.routes') ;
const auctionRoutes =require( './routes/auction.routes');
const app=express();
dotenv.config();
connect();
const PORT=process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cookieParser())

app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', shopRoutes)
app.use('/', productRoutes)
app.use('/', orderRoutes)
app.use('/', auctionRoutes)


app.use(notFound);
app.use(errorHandle);

app.listen(PORT,()=>{
    console.log(`Server is listining at port no ${PORT}`);
})