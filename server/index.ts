import express from 'express';
import dotenv from 'dotenv';
import { runConnection } from './config';


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
runConnection()

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
