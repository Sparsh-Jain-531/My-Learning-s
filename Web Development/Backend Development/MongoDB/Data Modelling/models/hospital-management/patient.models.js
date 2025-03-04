import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true,
        enum:["Male","Female","Other"]
    },
    bloodType:{
        type: String,
        required: true,
        enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]
    },
    diagonesedWith: {
        type: String,
        required: true
    },
    admittedAt:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    }
},{timestamps: true});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;