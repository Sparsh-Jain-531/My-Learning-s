import User from "../models/user.js";

export const getAllUsers=async(req,res,next)=>{
    const users=await User.find({});
    res.json({
        success: true,
        users,
    })
};

export const register=async(req,res,next)=>{
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    })
    res.json({
        success: true,
        message: "user created successfully!"
    })
};

export const getUser=async(req,res,next)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    res.json({
        success: true,
        user,
    })
};

export const updateUser=async(req,res,next)=>{
    const {id}=req.params;
    const {password}=req.body;
    const user=await User.findById(id);
    await user.updateOne({password})
    res.json({
        success: true,
        message: 'User updated successfully!',
    })
};

export const deleteUser=async(req,res,next)=>{
    const {id}=req.params;
    const user=await User.findById(id);
    await user.deleteOne()
    res.json({
        success: true,
        message:"User Deleted!",
    })
};
