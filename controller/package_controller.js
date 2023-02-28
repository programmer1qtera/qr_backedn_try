const Package = require('../model/package_models');
const asyncHandler = require('express-async-handler');


const createPackage = asyncHandler(async(req,res)=>{
    const {_id} = req.user;
    try {
        const newPackage = await Package.create({
            name: req.body.name,
            quantity: req.body.quantity,
            user:_id
        });
        res.json(newPackage)
    } catch (error) {
        throw new Error(error)
    }
});
const getAllPackage = asyncHandler(async(req,res)=>{
    try {
        const data = await Package.find();
        res.json({
            status: res.statusCode,
            message:"Berhasil mendapatkan semua data",
            data,
        })
    } catch (error) {
        
    }
});
const getPackage = asyncHandler(async(req,res)=>{
    const{id} = req.params;
    try {
        const data = await Package.findById(id);
        res.json(data)
    } catch (error) {
        throw new Error(error)
    }
});

module.exports ={createPackage,getAllPackage,getPackage}
