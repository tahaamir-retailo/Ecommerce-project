const mongoose = require('mongoose');
const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Product=require('../models/productModel');

const signUp=(req,res)=>{
    const newUser=new User(req.body);
    newUser.hash_password=bcrypt.hashSync(req.body.password, 10);
    newUser.save((err,user)=>{
        if (err){
            return res.status(400).send({
                message: err
              });
        }
        else{
            user.hash_password = undefined;
            return res.json(user);
        }
    })
};

const signIn=(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(!user){
            res.status(401).json({ message: 'Authentication failed. User not found.' });
        }
        else if (user){
            
            if (user.comparePassword(req.body.password)){
                return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'RESTFULAPIs'),message:'Welcome!'});
            }
            else{
                res.status(401).json({ message: 'Authentication failed. Wrong password.' });
            }
        }
    })
};


const adProduct = async (req,res)=>{
    const {name,description,vendor,price,category,subcategory} = req.body;

    const product=await Product.create({name,description,vendor,price,category,subcategory});

    if(product){
    res.send(product);
    }
    else{
        res.send("product couldnt be added");
    }
};

module.exports={signUp,signIn,adProduct};