import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try{
        const connectionInstsnce =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB Host : ${connectionInstsnce.connection.host}`)
    }catch(err){
        console.log("Mongodb connection error ", err);
        process.exit(1)
    }
}

export  default connectDB;