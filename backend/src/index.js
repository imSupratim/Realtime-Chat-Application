import express from 'express';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import dotenv from 'dotenv';
import {connectDB} from './lib/db.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { app , server } from './lib/socket.js';


dotenv.config();

app

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());    
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors({
    origin: 'https://api-chat-app-n5rw.onrender.com',
    credentials: true,  
}));

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);


const PORT = process.env.PORT || 5001

app.get("/", (req, res) => {
  res.send("API is running...");
});

server.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
    connectDB();
})



//JvTiyT8dawb22q6D
//mongodb+srv://iamsamrat45_db_user:JvTiyT8dawb22q6D@cluster0.zgwjcbd.mongodb.net/?appName=Cluster0
