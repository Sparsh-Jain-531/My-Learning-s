import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import User from "./models/user.js";

const app = express();

connectDB();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies;
     
    if(token){
        const decode=jwt.verify(token,"sadsadsadsa");
        req.user=await User.findById(decode._id)
        return next()
    } 
    res.redirect("/login")
}

// GET request API
app.get("/",isAuthenticated,(req,res,next)=>{
    res.render("logout.ejs",{name:req.user.name})
})
app.get("/register",(req,res,next)=>{
    res.render("register.ejs")
})
app.get("/login",(req,res,next)=>{
    res.render("login.ejs")
})
app.get("/success",(req,res,next)=>{
    res.render("success.ejs")
})
app.get("/logout",(req,res,next)=>{
    res.cookie("token", null, {
        httpOnly: true,
        expires: new Date(Date.now()),
      });
      res.redirect("/");
})

// POST request API
app.post("/register",async(req,res,next)=>{
    const {name,email,password} = req.body;

    let user = await User.findOne({email})
    if(user){
        return res.redirect("/login")
    }

    const hashedPassword = await bcrypt.hash(password,10);
    user = await User.create({name, email, password:hashedPassword})

    res.redirect("/success")
})
app.post("/login",async(req,res,next)=>{
    const {email,password} = req.body;

    let user = await User.findOne({email})
    if(!user){
        return res.redirect("/register")
    }
    
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.render("login.ejs",{message:"Incorrect Password!"})
    }
    const token = jwt.sign({_id:user._id},"sadsadsadsa")

    res.cookie("token",token,{
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 1000),
    })
    res.redirect("/")
})

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})