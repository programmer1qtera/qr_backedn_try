const User = require('../model/user_model');
const asyncHandler = require('express-async-handler');
const { generateToken } = require('../config/jwt_genearate');
const { json } = require('body-parser');

const createUser = asyncHandler(async(req,res)=>{
    const email = req.body.email;
    const findUser = await User.findOne({
        email: email
    });
    if(!findUser){
        const newUser = await User.create(req.body);
        res.json(newUser);
    }else{
        throw new Error('User Sudah di Buat')
    }
});

const login = asyncHandler(async (req,res)=>{
    const findNewUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if(findNewUser){
        res.json({
            status: res.statusCode,
            message: "login",
            data:{
                _id: findNewUser.id,
                name: findNewUser.name,
                email: findNewUser.email,
                role: findNewUser.role,
                token: generateToken(findNewUser.id)
            }
        })
    }else{
       throw new Error("User tidak di temukan")
    }
});

const findAllUser = asyncHandler(async(req,res)=>{
    try {
        const data = await User.find();
        res.json({
            status: res.statusCode,
            message: "mendapatkan semua data",
            data,
        })
    } catch (error) {
        throw new Error(error);
    }
});
const findUserId = asyncHandler(async(req,res)=>{
    const {_id} = req.user;
    try {
    const userGet = await User.findById(_id);
    res.json({
        status: res.statusCode,
        message: "mendapatkan data user",
        userGet,
    }) 
    } catch (error) {
        throw new Error(error)
    }
});

const updateUser = asyncHandler(async(req,res)=>{
    const {_id} = req.user;
    try {
       const updateUserr= await User.findByIdAndUpdate(_id,{
            name: req.body.name
        });
        res.json({
            status: res.statusCode,
            message:"update user",
        })
    } catch (error) {
        throw new Error(error)
    }
});
const deleteUser = asyncHandler(async()=>{});


module.exports={createUser,login,findAllUser,findUserId,updateUser};