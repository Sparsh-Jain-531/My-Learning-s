import mongoose from "mongoose";

// schema creation
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const User=mongoose.model("User",userSchema);

export default User;