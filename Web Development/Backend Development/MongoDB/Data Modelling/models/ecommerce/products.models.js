import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        default: 0,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;