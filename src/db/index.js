import mongoose from "mongoose";
import { DB_NAME } from "../constence.js";

const connectDB = async ()=>{
    try {
        const connectionInstence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connectd DB host : ${connectionInstence.connection.host}`);
        
    } catch (error) {
        console.error("MongoDB Connection ERROR : ",error);
        process.exit(1)
        
        
    }
}
export default connectDB