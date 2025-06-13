import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    //method second using objects
    username:{
        type:String,
        required:true,
        unique:true,
       lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,      
    }

},{timestamps:true})

export const User = mongoose.model("User",userSchema)