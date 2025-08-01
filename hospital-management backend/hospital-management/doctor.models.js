import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    name:{
        name:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        name:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Hospital',
        }
    ]
},{timestamps:true})
export const Doctor = mongoose.model("Doctor",doctorSchema)