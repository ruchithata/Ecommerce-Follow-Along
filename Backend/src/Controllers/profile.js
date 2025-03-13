import { Router } from "express";
import userModel from "../Model/userModel";

const profileRouter = Router();

profileRouter.get("/profile", async (req, res) => {
    try{a
        const {email} = req.body;
        if(!email){
            return res.status(400).json({message: "fill the input box"});
        }

        const emailexists = await userModel.findOne({email});
        if(!emailexists){
            return res.status(404).json({message: "user does not exists."});
        }

        const profile = emailexists.toObject();

        res.status(200).json({message: "your profile", profile});
    }
    catch(err){
        console.log("error in profile",err);
    }
});

module.exports = profileRouter;