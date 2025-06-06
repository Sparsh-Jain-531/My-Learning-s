import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    pincode:{
        type: String,
        required: true
    },
    specilization:[
        {
            type: String,
            required: true,
            trim: true
        }
    ]
},{timestamps: true});

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;