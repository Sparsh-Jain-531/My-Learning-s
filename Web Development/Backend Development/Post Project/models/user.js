const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    username:String,
    name:String,
    age:Number,
    email:String,
    password:String,
    profilepic:{
        type:String,
        default:"default.png"
    },
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
    }]
})

const User=mongoose.model('User',userSchema);

module.exports = User;