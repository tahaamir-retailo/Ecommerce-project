const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Product=require('../models/productModel');


const viewCategory = async (req,res)=>{
    try{
        const category=await Product.find({},'category');
        return res.send(category);
    }
    catch (err){
        res.send({err:"error cant load"});
    }
    
};


const viewSCategory = async (req,res)=>{
    try{
        const category=await Product.findOne({subCategory:req.body.subcategory},'subCategory');
        return res.json(category);
    }
    catch(err){
        res.send({err:"error cant load"});
    }
};

const getProducts=async (req,res)=>{
    const category=await Product.find({category:req.body.subcategory},'name description vendor category subCategory');
    res.json(category);
};

module.exports={
    viewCategory,
    viewSCategory,
    getProducts
};