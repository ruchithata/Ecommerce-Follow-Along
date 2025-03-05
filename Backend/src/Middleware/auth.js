const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
require('dotenv').config({path: '../Config/.env'})

const auth = async(req,res,next)=> {

    const tokenauth = req.headers.Autherization
    const token = tokenauth.split(" ")[1]   
    const secret = process.env.private_key;

    jwt.verify(token, secret, function(err,dacoded){
        if(err){
            console.log("error in auth middleware",err);
        }
        else{
            next()
        }
    });
}

module.exports = auth;