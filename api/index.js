import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import tripRouter from "./routes/Trip.js";
import userRouter from "./routes/User.js";
import shipRouter from "./routes/Ship.js";
import cookieParser from "cookie-parser";
import AuthRouter from "./routes/Auth.js";
import cors from "cors";


const app = express(); 
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 
app.use(cookieParser()); 
const uri = process.env.ATLAS_URI; 

mongoose.connect(uri, {}); 

const connection = mongoose.connection ; 
connection.once('open', ()=> { 
    console.log(` Đã nối kết được Database thành công`) ;
})



//route to api  
app.use("/api/user", userRouter);  
app.use("/api/ship", shipRouter);
app.use("/api/trip",tripRouter); 
app.use("/api/login",AuthRouter); 

app.use((err,req, res, next) => { 
    const errorStatus = err.status ||500; 
    const errorMessage = err.message || "Something went wrong"; 
    return res.status(errorStatus).json({ 
        success: false, 
        status: errorStatus, 
        message:errorMessage, 
        stack: err.stack,
    });
}); 

app.listen(port, () => { 
    console.log(` Đã nối kết được Server tại cổng : ${port}`) ;
});






