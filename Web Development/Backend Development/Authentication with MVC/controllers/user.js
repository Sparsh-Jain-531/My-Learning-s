import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const newUser=async(req,res)=>{
    const {name,email,password}=req.body;
    let user=await User.findOne({email})
    if(user){
        return res.redirect("/login"); 
    }
    const hashedPassword=await bcrypt.hash(password,10)
    user=await User.create({name,email,password:hashedPassword});
    res.redirect("/success");
}

export const Login=async(req,res)=>{
    const {email,password}=req.body;
    let user=await User.findOne({email})
    if(!user){
        return res.redirect("/register");
    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.render("login.ejs",{email,message:"Incorrect Password!"})
    }
    const token= jwt.sign({_id:user._id},"fdsfdsfdsfds")
    res.cookie("token",token,{
        httpOnly:true,
        maxAge:1000*60*60*24*7,
    })
    res.redirect("/")
}

export const Home=(req,res)=>{
    res.render("logout.ejs",{name:req.user.name})
}

export const registerPage=(req,res)=>{
    res.render("register.ejs");
}

export const loginPage=(req,res)=>{
    res.render("login.ejs");
}

export const success=(req,res)=>{
    res.render("success.ejs");
}

export const logout=(req,res)=>{
    res.clearCookie("token").redirect("/login");
}