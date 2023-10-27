const mongoose=require('mongoose');
const asyncHandler=require('express-async-handler');

const connect=asyncHandler(async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL);
     console.log("DataBase Connected Successfully");
    }catch(error)
    {
        throw new Error("DataBase Connection Error");
    }
})

module.exports=connect;