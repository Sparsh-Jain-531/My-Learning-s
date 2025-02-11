import mongoose from "mongoose";

const connectDB=async()=>{
    try {

        await mongoose.connect("mongodb://localhost:27017/",{dbName: "backend"})
        .then(()=>{console.log("Connected to Database")})
        .catch((err)=>{console.log(err)})

    } catch (error) {
        console.log(error)
    }
}

export default connectDB;