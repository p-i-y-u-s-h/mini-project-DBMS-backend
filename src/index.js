import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./lib/db.js";
import authRouter from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}));

app.use("/api/auth",authRouter);
app.use("/api/message",messageRoutes);

app.listen(PORT,()=>{
    console.log("server is running on port: "+PORT);
    connectDB();
})