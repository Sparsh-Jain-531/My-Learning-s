import express from "express";
import morgan from "morgan";
import User from "./models/user.js";
import connectDB from "./config/db.js";

const app = express();

connectDB()

app.set('view engine', 'ejs') // for rendering html file on browser.--------------------------------------------------------


// middleware - it is just basically a function that run before giving response of a particular url.------------------------------------------------
// there are three types of middleware -inbuild, customise, third-party-------------------------------------------

// Third-party middleware (used for info about status code, time, type of req, etc.)-----------------------------------------
app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// customised middleware------------------------------------------------
app.use((req,res,next)=>{
    console.log("middleware is running for all routes");
    return next();
})  

// Using a middleware for a particular route----------------------------------------------------------------
// app.get("/",(req,res,next) => {
//     console.log('middleware of default route as you hit default url');
//     next()
// }, (req, res) => {

//     // res.send("Hello, server");
//     res.render("index"); // nedd app.set for setting ejs as view engine 
//     // res.render("index.ejs"); // does not nedd app.set for setting ejs as view engine instead provide file name with extension
// })

app.use(express.static('public')) // this is a middleware which will serve all the static files from public folder--------------------------------

app.get("/", (req, res) => {

    // res.send("Hello, server");
    res.render("index"); // nedd app.set for setting ejs as view engine 
    // res.render("index.ejs"); // does not nedd app.set for setting ejs as view engine instead provide file name with extension
})


// handling form data to backend

app.post("/form",(req,res)=>{
    console.log(req.body);
    res.send("Data Received");
})


// Register User in database

app.get("/register", (req, res) => {
    res.render("register.ejs");
})
app.post("/register", async(req, res) => {
    const {username,email,password} = req.body;
    const userData=await User.create({
        username,
        email,
        password,
    })
    res.send(`user created Successfully!`)
})

// Fetch User in database

app.get("/users",async(req,res)=>{
    const users=await User.find()
    res.send(users)
})

// update data in database

app.get("/update",async(req,res)=>{
    await User.findOneAndUpdate({
        username:"a"
    },{
        email:"xyz@gmail.com"
    })
    res.send("User Updated Successfully!")
})

// delete data in database

app.get("/delete",async(req,res)=>{
    await User.findOneAndDelete({
        username:"a"
    })
    res.send("User Deleted Successfully!")
})

app.get("/about", (req, res) => {
    res.send("About");
})

app.get("/contact", (req, res) => {
    res.send("Contact");
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})