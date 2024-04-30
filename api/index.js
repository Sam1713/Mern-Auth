import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
console.log("Mongo is connected")
}).catch((error)=>{
    console.log(error)
})
const app=express()
app.listen(3000,()=>{
    console.log('server listerning on port 3000')
})
//Sam@123.com
//samsaju399
//mongodb+srv://samsaju399:<password>@mern.8k8imwr.mongodb.net/
