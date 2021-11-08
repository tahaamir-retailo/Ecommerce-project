const mongoose = require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const Product=require('../models/productModel');
const Cart=require('../models/cartModel');
const Order=require('../models/orderModel');

//array product name issue

const adToCart = async (req,res)=>{
    const user=req.body.user;
    const {name,description,vendor,price}=req.body;
    

    const cart = await Cart.findOne({user:user});

    if (cart){
        const cart=await Cart.findOneAndUpdate({user:user},{
            $push:{
                products: {name,description,vendor,price}
            }
        });
        res.json(cart);
    }else{
        const cartt=Cart.create({user:user,products:{
            name,description,vendor,price
        }})
        res.json(cartt);
    }
    
    

}

const order =async (req,res)=>{
    const cart=req.body.cart_id;
    const user=req.body.user_id;
    if (!cart || !user){
        return res.send("Error! , enter values!");
    }

    const order=await Order.create({
        user:user,
        cart:cart,
        status:"Order Confirmed!"
    })
    old_cart=await Cart.findOneAndRemove({_id:cart});

    res.json(order);
}

module.exports={
    adToCart,order
}