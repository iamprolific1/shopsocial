import './types/customTypes';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { runConnection } from './config';
import userRoute from './routes/userAuth.route';
import handleErrors from './middlewares/errorHandler';


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))
app.use(handleErrors);
app.use('/api/auth', userRoute);



app.listen(PORT, ()=>{
    runConnection();
    console.log(`Server is running on port ${PORT}`)
})
