const { Router } = require("express");
const productmodel = require("../Model/ProductModel");
const { productupload } = require("../../multer");
const productrouter = Router();
const path = require("path");

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