import { Router } from "express";
import userModel from "../Model/userModel";

const orderRouter = Router();

orderRouter.post('/place', auth, async(req,res,next)=>{
    try{
        const email = req.user;
        const { orderItems,shippingAddress } = req.body;

        if(!email){
            return res.status(400).json({message: "user not found."});
        }
        
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0){
            return res.status(400).send({ message: "Order Items are required." });
        }

        if(!shippingAddress){
            return res.status(400).json({message: "shipping address is required."});
        }

        const user= await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "user not found."});
        }

        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new order({
                user: user._id,
                orderItems: [item],  //each order contains a single item
                shippingAddress,
                totalAmount,
            });
            return order.save();
        });

        const orders = await Promise.all(orderPromises);


        const arr = user.cart
        arr.splice(0,arr.length)

        res.status(201).json({message: "orders palced and cart cleared succssfully.", orders});
    }
    catch(err){
        console.log("error placing the order.",err);
    }
})


orderRouter.get('/getorder', auth, async(req,res)=>{
    try{
        const email = req.user
        if(!email){
            return res.status(400).json({message: "user not found."});
        }
        const orderhistory = await orderModel.findOne({email});

        console.log(orderhistory)

        res.status(200).json({message: "got it successfully"},orderhistory);
    }
    catch(err){
        console.log("error getting the order.",err);
    }
});

module.exports = orderRouter;