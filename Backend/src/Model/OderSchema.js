import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    orderItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Productmodel',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
            ,
            image: {
                type: Number,
                required: true
            }
        }
    ],
    shippingAddress: {
        country: {type: String, required: true},
        city: {type: String, required: true},
        address1: {type: String, required: true},
        address2: {type: String, required: true},
        zipCode: {type: Number, required: true},
        addressType: {type: String, required: true}
    },
    totalAmount: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
        default: "Processing",
    },
    deliveredAt: {
        type: Date
    }
}, {timestamps: true}
);

const orderModel = model('Order', orderSchema);
module.exports = orderModel;