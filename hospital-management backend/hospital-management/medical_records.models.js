import mongoose from "mongoose";
const medicalRecordSchema = new mongoose.Schema({
    patientName:{
        type:String,
        required:true
    },
    PatientId:{
        type:String,
        required:true,
    },
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital'
    },
     doctorsName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
     }
},{timestamps:true})
export const MedicalRecord = mongoose.model("MedicalRecords",medicalRecordSchema)