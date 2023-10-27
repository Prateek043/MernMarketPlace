const User=require("../models/userModel.js");
const jwt=require("jsonwebtoken");
const asyncHandler=require("express-async-handler");

const jsonwebtokenverify=asyncHandler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1];
        try{
            if(token)
            {
                const decode=jwt.verify(token,process.env.SECRET_KEY);
                const user=await User.findById(decode?.id);
                req.user=user;
                next();
            }
        }
        catch(err){
            throw new Error("Token Expired,Please login");
        }
    }
    else{
        throw new Error("No Token is in The header");
    }
})

const isAdmin=asyncHandler(async(req,res,next)=>{
    const {email}=req.user;
    const user=await User.findOne({email})
    if(user.role!=="admin")
    {
        throw new Error("You have no Authorized permission");
    }
    else{
        next();
    }
})


module.exports={jsonwebtokenverify,isAdmin};