import mongoose from "mongoose";

const medicalReportSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    report: {
        type: String,
        required: true
    },
    prescription: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    nextVisitDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
},{timestamps: true});

const MedicalReport = mongoose.model("MedicalReport", medicalReportSchema);

export default MedicalReport;