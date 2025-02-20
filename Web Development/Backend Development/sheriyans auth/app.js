const express = require('express')
const path = require('path');
const connectDB = require('./config/db');
const User = require('./models/user');

const app = express();

connectDB();

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"public")))

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/read", async(req, res) => {
    const users = await User.find();
    res.render("read",{users:users});
})

app.get("/delete/:id", async(req, res) => {
    const {id} = req.params;
    await User.findOneAndDelete({_id:id});
    res.redirect("/read")
})

app.post("/create", async(req, res) => {
    const {name, email, image} = req.body;
    await User.create({name, email, image});
    res.redirect("/read");
});

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})