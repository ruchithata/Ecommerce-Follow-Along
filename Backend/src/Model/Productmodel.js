const {model, Schema} = require("mongoose");


const productSchema = new Schema({
    name: {
        type: String,
        required: [ true, "Please provide the name of the product"]
    },
    price: {
        type: Number,
        required: [true, "Please provide the price of the product"]
    },
    description: {
        type: String,
        required: [true, "Please provide the description of the product"]
    },
    image: {
        type: String,
        required: [true, "Please upload the image of the product"]
    },
    category: {
        type: String,
        required: [true, "Please provide the category of the product"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter the stock of the product"]
    },
    tags: {
        type: Array,
        required: []
    },
    email: {
        type: String,
        required: true,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    createdAt: {
        type: Date,
        default: Date.now(), //Automatically set the creation date
    }
},
{
    timestamps: true,
});

const productmodel = model("Product", productSchema);

module.exports = productmodel;