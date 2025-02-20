const mongoose = require('mongoose')

const connectdb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/",{dbName:"data"})
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = connectdb;