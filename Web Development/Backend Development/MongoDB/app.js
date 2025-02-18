import express from 'express';
import mongoose from 'mongoose';

const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Database connection
mongoose.connect("mongodb://localhost:27017/",{dbName:"mongotest"})
.then(()=>{console.log("Connected with database")})
.catch(()=>{console.log("Failed to connect")})

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
})

const User=mongoose.model('User',userSchema);

app.get("/", (req, res) => {
    res.send("Hello, World!");
})

app.post("/create",async(req,res)=>{
    const {name,username,email} = req.body;
    const user = await User.create({name,username,email})
    res.send(user);
})

app.get("/user",async(req,res)=>{
    const user = await User.find()
    res.send(user);
})

app.put("/update",async(req,res)=>{
    const {name, username} = req.body;
    const user = await User.findOneAndUpdate({name},{username:username})
    res.send(user);
})

app.get("/delete",async(req,res)=>{
    const {name, username} = req.body;
    const user = await User.findOneAndDelete({name})
    res.send(user);
})

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})