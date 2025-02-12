import { app } from "./app.js";
import connectDB from "./config/db.js";

// connect with Database
connectDB();

// server is listening
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 4000");
});