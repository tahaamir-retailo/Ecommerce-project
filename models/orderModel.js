const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const Schema=mongoose.Schema;
const joi = require('@hapi/joi');
const {model,schema}=require('./productModel');
const User=require('./userModel');



const orderSchema=new Schema({
    cart:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Order',orderSchema);