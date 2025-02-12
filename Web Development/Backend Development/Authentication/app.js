import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();

// Middlewares
app.use(morgan("dev"))
app.use(cookieParser());
app.use(express.json()) // for receiving json data in body
app.use(express.urlencoded({extended: true})) // for receiving data from form


// connect with Database
mongoose.connect("mongodb://localhost:27017/",{dbname:"auth"})
.then(()=>{console.log("Connected to Database");})
.catch((err)=>{console.log("Error with Database", err)});

// schema creation
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const User=mongoose.model("User",userSchema);


// Middleware for checking cookie in brower for authentication as it check that wheather the user is logged In or not
const isAuthenticated=async(req,res,next)=>{
    const {token} = req.cookies;
    if(token){
        const decode= jwt.verify(token,"fdsfdsfdsfds")
        req.user=await User.findById(decode._id);
        return next();
    }
    res.redirect("/login")
}

// for checking that backend is working or not
app.get("/test",(req,res)=>{
    res.send("Server is Working!");
})

// All get routes
app.get("/",isAuthenticated,(req,res)=>{
    res.render("logout.ejs",{name:req.user.name})
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})
app.get("/login",(req,res)=>{
    res.render("login.ejs");
})
app.get("/success",(req,res)=>{
    res.render("success.ejs");
})
app.get("/logout",(req,res)=>{
    res.clearCookie("token").redirect("/login");
})

// All post routes
app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body;
    let user=await User.findOne({email})
    if(user){
        return res.redirect("/login"); 
    }
    const hashedPassword=await bcrypt.hash(password,10)
    user=await User.create({name,email,password:hashedPassword});
    res.redirect("/success");
});

app.post("/login",async(req,res)=>{
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
})

// server is listening
app.listen(4000,()=>{
    console.log("Server is running on port 4000");
});