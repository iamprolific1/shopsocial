import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { runConnection } from './config';
import userRoute from './routes/userAuth.route';
import handleErrors from './middlewares/errorHandler';


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    // allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Authorization']  // add your other headers here if needed.  // here we are allowing all origin and headers for the purpose of this example.  // If you want to allow specific origins and headers, you should list them here.  // Make sure to keep this list secure and only include headers that are necessary for your application.  // Make sure to replace 'http
}))
app.use(handleErrors);
app.use('/api/auth', userRoute);



app.listen(PORT, ()=>{
    runConnection();
    console.log(`Server is running on port ${PORT}`)
})
