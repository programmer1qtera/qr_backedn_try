const User = require('../model/user_model');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const userMidleware = asyncHandler(async(req,res,next)=>{
 let token ;
 if(req?.headers){
    token = req.headers.tokens;
    try {
       if(token){
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decode?.id);
        req.user = user;
        next();
       } else{
        throw new Error("Not token verify");
       }
    } catch (error) {
        throw new Error(error)
    }
 }else{
    throw new Error("Notoken enter")
 }
});

const isAdmin = asyncHandler(async(req,res,next)=>{
const {_id} = req.user;
const admin = await User.findById(_id);
if (admin.role !="admin") {
   res.json({
      message: "Bukan Admin"
   });
} else {
   next();
}
})

module.exports = {userMidleware,isAdmin}