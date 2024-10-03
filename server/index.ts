import express from 'express';
import dotenv from 'dotenv';
import { runConnection } from './config';
import userRoute from './routes/userAuth.route';


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use('/api/auth', userRoute);


app.listen(PORT, ()=>{
    runConnection();
    console.log(`Server is running on port ${PORT}`)
})
