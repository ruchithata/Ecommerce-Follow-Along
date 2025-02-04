const { Router } = require("express");
const productmodel = require("../Model/ProductModel");
const { productupload } = require("../../multer");
const productrouter = Router();


productrouter.get("/", (req,res)=>{
    res.send("Product Router");
});

productrouter.post("/",productupload('files'), async(req,res)=>{
    const {name, price, description, category, stock, tags, email} = req.body;
    const image = req.file.map(file => file.path);
    try{
        const seller = await productmodel.filename({email:email});
        if (!seller) {
            return res.status(400).json({message: "Seller not found"});
        }

        if (images.length === 0) {
            return res.status(400).json({message: "Please upload atleast one image"});
        }

        await productmodel.create({
            name:name,
            price:price,
            description:description,
            image:images,
            category:category,
            stock:stock,
            tags:tags,
            email:email
        });

        res.status(200).json({message: "Product added successfully", product:newproduct});

    }
    catch(error){
        console.log(error);
    }

});


module.exports = productrouter;