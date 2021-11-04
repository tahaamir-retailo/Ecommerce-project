const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Product=require('../models/productModel');


const viewCategory = async (req,res)=>{
    const category=await Product.find({},'category');
    res.json(category);
};

const viewSCategory = async (req,res)=>{
    const category=await Product.find({category:req.body.subCategory},'subCategory');
    res.json(category);
};

const getProducts=async (req,res)=>{
    const category=await Product.find({category:req.body.category},'name description price vendor');
    res.json(category);
};

module.exports={
    viewCategory,
    viewSCategory,
    getProducts
};