import { DbConfig, DbConnection } from './dbConfig';
import dotenv from 'dotenv'
dotenv.config();

const config: DbConfig = {
    uri: process.env.MONGO_URI || '',
}

const dbConnection = new DbConnection(config);

export async function runConnection() {
    try{
        await dbConnection.connect();
    } catch (e){
        console.error("Error in application: ", e)
    }
    
}