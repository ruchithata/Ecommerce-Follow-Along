const { Router } = require("express");
const productmodel = require("../Model/ProductModel");
const { productupload } = require("../../multer");
const productrouter = Router();
const path = require("path");
const userModel = require("../Model/userModel");

productrouter.get("/get-router", async (req, res) => {
    try {
        const productfind = await productmodel.find();
        if (!productfind) {
            return res.status(400).json({ message: "No product found" });
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
        res.status(200).json(productimage);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

productrouter.post('.cart',async(req,res)=>{
    const {email,productid,productname,quantity}=req.body

    try{
        if(!email){
            return res.status(404).json("fill all inputbox")
        }
        const findmail = await userModel.findOne({email:email})
        if(!findemail){
            return res.status(404).json({message:'user does not exist'})
        }
        if(!mongoose.types.objected.isvalid(productid)){
            return res.status.json({message:'productis not there'})
        }
        if(!quantity && quantity<0){
            return res.status(400).json({message:'you dont have neccessary quantity'})
        }
        const findproduct=await productmodel.findById(productid)
        if(!findproduct){
            return res.status(400).json({message:'product does not exist'})
        }
        const cartproduct=await findemail.cart.findIndex((i)=>{
            return i.productid===productid
        })
        if(cartproductid>-1){
            findemail.cart[cartproductid].quantity+=quantity
        }
        else{
            findemail.cart.push({productid,productname,quantity})
        }


    }
    catch(err){
        console.log("error in cart")
    }
})


productrouter.get('/getcart',async(req,res)=>{
    try{
        const {email}=req.body
        if(!email){
            return res.status(400).json({message:"user does not exist"})
        }
        const user=await userModel.findOne({email:email}).populat({
            path:cart.productid,
            model:productmodel
        })

        if(!user){
            return res.status(400).json({message:"user does not exist"})
        }

        return res.status(400).json({message:"Cart is shown successfully"})

    }
    catch (err){
        console.log("error in cart for get req")
    }
})

productrouter.put('/edit-cart',async(req,res)=>{
    const {email,productid,quantity}=req.body
    try{
    
    if(!email||!productid||quantity==undefined){
     return res.status(404).json({message:"put all details"})
    }
    const finduser=await userModel.findOne({email:email})
    if(!finduser){
     return res.status(500).json({message:"user is not found"})
    }
 
    const findproduct=await Productmodel.findOne({_id:productid})
    if(!findproduct||findproduct.stock<=0){
     return res.status(404).json({message:"product not avzailable"})
    }
   
    const findcartproduct=finduser.cart.find(item=>item.productid===productid)
 
    if(!findcartproduct){
     return res.status(404).json({message:"can not find"}) 
    }
    findcartproduct.quantity=quantity
    await finduser.save()
    return res.status(200).json({message:"edited successfully"})
 }
 catch(err){
     console.log(err)
 }
 })

productrouter.post("/post-product", productupload.array('files'), async (req, res) => {
    const { name, price, description, category, stock, tags, email } = req.body;
    const images = req.files.map(file => file.path);
    try {
        const seller = await productmodel.findOne({ email: email });
        if (!seller) {
            return res.status(400).json({ message: "Seller not found" });
        }

        if (images.length === 0) {
            return res.status(400).json({ message: "Please upload at least one image" });
        }

        const newproduct = await productmodel.create({
            name: name,
            price: price,
            description: description,
            image: images,
            category: category,
            stock: stock,
            tags: tags,
            email: email
        });

        res.status(200).json({ message: "Product added successfully", product: newproduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

productrouter.put("/edit-product/:id", productupload.array('files', 10), async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, tags, price, stock, email } = req.body;
        const existproduct = await productmodel.findById(id);

        if (!existproduct) {
            return res.status(400).json({ message: "Product does not exist" });
        }

        let updateimages = existproduct.image;
        if (req.files && req.files.length > 0) {
            updateimages = req.files.map((img) => {
                return `/product/${path.basename(img.path)}`;
            });
        }
        existproduct.name = name;
        existproduct.description = description;
        existproduct.category = category;
        existproduct.tags = tags;
        existproduct.price = price;
        existproduct.stock = stock;
        existproduct.email = email;
        existproduct.image = updateimages;

        await existproduct.save();

        res.status(200).json({ product: existproduct });
    } catch (err) {
        console.log('error in updating');
        res.status(500).json({ message: "Internal Server Error" });
    }
});

productrouter.delete("/delete-product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const existproduct = await productmodel.findById(id);

        if (!existproduct) {
            return res.status(400).json({ message: "Product does not exist" });
        }

        await existproduct.deleteOne();
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        console.log('error in deleting');
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = productrouter;