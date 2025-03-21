import mongoose from "mongoose";

export const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(process.env.mongo_url);
        console.log(`MongoDB connected: ${conn.connection.host}`);

    } catch (error) {
        console.log("mongoDB connection error:", error);
    }    
}