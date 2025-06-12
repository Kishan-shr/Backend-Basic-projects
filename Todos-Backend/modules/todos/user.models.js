import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
   
 {
    //method 1
    // username:String,
    // email:String,
    // isActive:Boolean
    
    // another method and more professional
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true, "password is required"]

    }
},{timestamps:true}
)
// when this user goes to data base User becomes users , always  plural $ lower case goes db 
export const User = mongoose.model("User",userSchema)