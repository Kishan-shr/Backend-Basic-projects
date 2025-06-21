import mongoose,{Schema} from "mongoose";
const subscriptionSchema = new Schema({
    subscriber:{
        type:Schema.Types.ObjectId, //one who is subscribing
        rer:"User"
    },
    channel:{
         type:Schema.Types.ObjectId, //one to whom 'subscriber' is subscribing
        rer:"User"
    },
    
},{timestamps:true})

export const subscription = mongoose.model("Subscription",subscriptionSchema)