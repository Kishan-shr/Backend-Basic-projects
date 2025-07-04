import  mongoose from "mongoose";
 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please provide an password"],
        unique:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:String
 })

//  incase of others
//  const User = mongoose.model("User",userSchema)
//  export default User

// incase of nextjs

 const User = mongoose.model.users || mongoose.model("users",userSchema)
 export default User