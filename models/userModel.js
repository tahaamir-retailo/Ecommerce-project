const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
const Schema=mongoose.Schema;
const joi = require('@hapi/joi');

var UserSchema=new Schema({
    fullname:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true
    },
    hash_password:{
        type:String,
        required:true
    },
});


UserSchema.methods.joiValidate = (obj)=>{
    var schema ={
        fullname: joi.string().required(),
        email: joi.string().required().email(),
        hash_password: joi.string().required()
    }
    return joi.validate(obj,schema);
}

UserSchema.methods.comparePassword=function (password){
    return bcrypt.compareSync(password,this.hash_password);
};

module.exports=mongoose.model('User',UserSchema);