import mongoose from "mongoose";
import { Product } from "./product.models";

const orderItemSchema = new mongoose.Schema({
    ProductId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
     type:Number,
     required:true,
     //another method
    // type:[{
    //     Product
    //  }]
    },
    orderItems:{
type:[orderItemSchema]
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }
},{timestamps:true})
const oderSchema = new mongoose.Schema(
  {
    order: {
      type: Number,
      required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", oderSchema);
