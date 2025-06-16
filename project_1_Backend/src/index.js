// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is Running at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo Db connection Failed !!!",err)
})











//this 1 approach to connect db
// import express from 'express'
// const app = express()

// // function connectDB(){}
// // connectDB()

// ;( async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//       app.on("error",(error)=>{
//         console.log("Error",error)
//         throw error
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`App is Listening on port ${process.env.PORT}`)
//       })
//     } catch (error) {
//         console.log("Error:",error)
//         throw error
//     }
// })()