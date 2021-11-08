const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const Schema=mongoose.Schema;
const joi = require('@hapi/joi');
const {model,schema}=require('./productModel');
const User=require('./userModel');




const cartSchema=new Schema({
    products:[schema],
    user:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Cart',cartSchema);