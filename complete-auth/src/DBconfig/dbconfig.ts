import mongoose from "mongoose";

export async function connectDB(){
    try{
 mongoose.connect(process.env.MONGO_URL!)
 const connection = mongoose.connection;
 connection.on('connected',()=>{
console.log('MONGO DB connected successfully')
 })
 connection.on('error',(err)=>{
    console.log('Mongodb connection error , please make sure db is up and running',+err);
    process.exit(1);
 })
    } catch(error){
       console.log('something went wrong while connecting to the database'); 
       console.log(error); 
    }
}