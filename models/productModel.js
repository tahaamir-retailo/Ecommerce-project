const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const Schema=mongoose.Schema;
const joi = require('@hapi/joi');

var productSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    vendor:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    subCategory:{
        type:String,
        required:true
    }
});


module.exports=mongoose.model('Product',productSchema);