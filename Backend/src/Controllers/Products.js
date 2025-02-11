const { Router } = require("express");
const productmodel = require("../Model/ProductModel");
const { productupload } = require("../../multer");
const productrouter = Router();


productrouter.get("/get-router", async (req,res)=>{
    try {
        const productfind = await productmodel.find();
        console.log(productfind);

        if (!productfind) {
            return res.status(400).json({message: "No product found"});
        }

        const productimage = productfind.map((product) => {
            return {
                id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.image,
                category: product.category,
                stock: product.stock,
                tags: product.tags,
                email: product.email,
                createdAt: product.createdAt
            };
        });
        return products;
    }
    catch(err){
        console.log(err);
    }
});

productrouter.post("/post-product",productupload.array('files'), async(req,res)=>{
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