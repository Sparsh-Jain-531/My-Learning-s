import mongoose from "mongoose";

const orderItemsSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        default:1
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems:[orderItemsSchema],
    shippingAddress: {
        type: String,
        required: true
    },
    status:{
        type:String,
        enum: ["Pending","Processing","Shipped","Delivered"],
        required:true,
        default:"Pending"
    }
},{timestamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;