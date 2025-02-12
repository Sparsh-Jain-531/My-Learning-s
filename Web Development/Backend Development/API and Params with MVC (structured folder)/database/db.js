import mongoose from "mongoose";

const connectDB=async()=>{
    await mongoose.connect(process.env.MONGO_URI,{dbName:"backendapi"})
    .then(()=>{console.log("Connected to Database")})
    .catch((err)=>{console.log("Error with database",err)})
}

export default connectDB;