import { DataSource } from 'typeorm';
import { User } from '../models/User';
import { Event } from '../models/Event';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Validate required environment variables
const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_NAME'];
for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
        console.error(`Missing required environment variable: ${envVar}`);
        process.exit(1);
    }
}

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME,
    entities: [User, Event],
    synchronize: true, // Set to false in production
    logging: process.env.NODE_ENV === 'development',
    extra: {
        connectionLimit: 10
    },
    timezone: 'Z',
    charset: 'utf8mb4'
});
