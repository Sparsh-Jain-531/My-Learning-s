import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
},{timestamps: true});

const Category = mongoose.model("Category", categorySchema);

export default Category;