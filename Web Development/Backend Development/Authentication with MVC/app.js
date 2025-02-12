import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import userRoutes from "./routes/user.js"

export const app = express();
config({
    path: ".env",
});

// Middlewares
app.use(morgan("dev"))
app.use(cookieParser());
app.use(express.json()) // for receiving json data in body
app.use(express.urlencoded({extended: true})) // for receiving data from form

app.use("/", userRoutes);

// for checking that backend is working or not
app.get("/test",(req,res)=>{
    res.send("Server is Working!");
})
