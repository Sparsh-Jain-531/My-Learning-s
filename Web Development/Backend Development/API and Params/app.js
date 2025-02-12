import express from "express";
import userRouter from "./routes/user.js"
import { config } from "dotenv";

export const app=express();
config({
    path:".env"
})

// middleware
app.use(express.json()); // for receiving json data in body
app.use(express.urlencoded({extended:true})); // for receiving from form

// routes
app.use("/user", userRouter);

app.get("/",(req,res,next)=>{
    res.json({
        success: true,
        message: "Backend is Working!"
    })
})

