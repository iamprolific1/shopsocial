import express from 'express';
import dotenv from 'dotenv';
import { runConnection } from './config';
import userRoute from './routes/userAuth.route';
import handleErrors from './middlewares/errorHandler';


dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(handleErrors);
app.use('/api/auth', userRoute);

// app.get('/clear-cookies', (req, res)=> {
//     res.clearCookie('token');
//     res.send('cookie cleared')
// })

app.listen(PORT, ()=>{
    runConnection();
    console.log(`Server is running on port ${PORT}`)
})
