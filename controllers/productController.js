const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const {model:Product}=require('../models/productModel');


const viewCategory = async (req,res)=>{
    const category=await Product.find({},'category');
    res.json(category);
};

const viewSCategory = async (req,res)=>{
    const category=await Product.find({category:req.params.id},'subCategory');
    res.json(category);
};

const getProducts=async (req,res)=>{
    if (req.isAuthenticated){
        const category=await Product.find({category:req.params.id},'name description price vendor');
        res.json(category);
    } else{
        const category=await Product.find({category:req.params.id},'name description vendor'); 
        res.json(category);
    }
    
};

module.exports={
    viewCategory,
    viewSCategory,
    getProducts
};