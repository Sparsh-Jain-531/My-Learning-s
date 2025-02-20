const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db.js');
const User = require('./models/user.js');
const Post = require('./models/post.js');
const upload = require('./config/multerconfig.js');

const app = express();

connectDB();

app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

const isLoggedIn=(req,res,next)=>{
    if(!req.cookies.token){
        res.render("login")
    } else {
        const decoded = jwt.verify(req.cookies.token,"secret");
        req.user = decoded;
        next();
    }
}

app.get('/', (req, res) =>{
    res.render('register');
})

app.get('/profile/upload', (req, res) =>{
    res.render('profileupload');
})

app.post('/upload',isLoggedIn, upload.single("image"), async(req, res) =>{
    const user=await User.findOne({email:req.user.email});
    user.profilepic=req.file.filename;
    await user.save();
    res.redirect('/profile');
})

app.get('/login', (req, res) =>{
    res.render('login');
})

app.post('/register', async(req, res) =>{
    const { username, age, name, email, password } = req.body;
    let user=await User.findOne({ email: email})
    if(user){
        return res.status(400).send("User Already Exists!!!");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user=await User.create({
        username,
        name,
        age,
        email,
        password: hashedPassword,
    })
    const token=jwt.sign({email:email,userid:user._id},"secret")
    res.cookie('token',token,{httpOnly:true}).redirect("/profile")
    
})

app.post('/post', isLoggedIn, async(req, res) =>{
    const { content } = req.body;
    const user=await User.findOne({ email:req.user.email })

    let post=await Post.create({
        user:user._id,
        content
    })

    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile")
    
})

app.post('/login', async(req, res) =>{
    const { email, password } = req.body;
    let user=await User.findOne({ email: email})
    if(!user){
        return res.status(400).send("Something went Wrong!!!");
    }
    const checkPassword=await bcrypt.compare(password,user.password);
    if(!checkPassword){
        return res.status(400).send("Invalid Password!!!");
    }
    const token=jwt.sign({email:email,userid:user._id},"secret")
    res.cookie('token',token,{httpOnly:true}).status(200).redirect("/profile")
})

app.get("/logout",(req,res)=>{
    res.clearCookie('token');
    res.redirect('/login');
})

app.get("/profile",isLoggedIn,async(req,res)=>{
    const user=await User.findOne({ email:req.user.email }).populate("posts");
    res.render('profile',{user:user});
})

app.get("/like/:id",isLoggedIn,async(req,res)=>{
    const post=await Post.findOne({ _id:req.params.id}).populate("user")
    if(post.likes.indexOf(req.user.userid)===-1){
        post.likes.push(req.user.userid);
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid),1);
    }
    await post.save();
    res.redirect("/profile");
})

app.get("/edit/:id",isLoggedIn,async(req,res)=>{
    const post=await Post.findOne({ _id:req.params.id})
    res.render("edit",{post:post});
})

app.post("/update/:id",isLoggedIn,async(req,res)=>{
    const post=await Post.findOneAndUpdate({ _id:req.params.id},{content:req.body.content})
    res.redirect("/profile");
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})