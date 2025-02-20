const mongoose = require('mongoose')

const connectDB=async()=>{
    await mongoose.connect("mongodb://localhost:27017/",{dbName:"post"})
    .then(()=>{console.log("Connected with Database")})
    .catch(()=>{console.log("Failed to connect to Database")})
}

module.exports = connectDB;