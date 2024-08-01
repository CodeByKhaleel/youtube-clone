import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})
 
connectDB()

/*
import express from "express"
const app = express()
;( async ()=>{
    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("listening on 8000")
        })
    } catch (error) {
        console.error(error)
        throw error
    }
})()
    */