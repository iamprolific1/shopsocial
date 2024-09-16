import mongoose, { ConnectOptions } from 'mongoose';

export interface DbConfig {
    uri: string;
    dbName?: string;
    options?: ConnectOptions;
}

export class DbConnection implements DbConfig {
    uri: string;
    dbName?: string;
    options?: ConnectOptions;

    constructor(config: DbConfig) {
        this.uri = config.uri;
        this.dbName = config.dbName;
        this.options = config.options || {};
        
    }

    async connect(): Promise<typeof mongoose> {
        try {
            const options: ConnectOptions = { ...this.options, dbName: this.dbName };

            await mongoose.connect(this.uri, options);
            console.log('Database Connected Successfully');
            return mongoose;
        } catch (error) {
            console.error('Error Connecting to database:', error);
            throw error;
        }
    }

    async close(): Promise<void> {
        try {
            await mongoose.disconnect();
            console.log('Connection closed');
        } catch (error) {
            console.error('Error closing connection:', error);
        }
    }
}
