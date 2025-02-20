const mongoose = require('mongoose')

const connectDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/",{dbname: "sheriyanauth"})
    .then(()=>{console.log("Connected with Database")})
    .catch(()=>{console.log("Failed with Database")})
}

module.exports=connectDB;