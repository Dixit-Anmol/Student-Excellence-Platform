import 'reflect-metadata';
import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { AppDataSource } from './config/database';
import authRouter from './routes/auth';
import eventRouter from './routes/events';

// Load environment variables from the root .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Application = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:8010'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ API Routes (only once)
app.use('/api/auth', authRouter);
app.use('/api/events', eventRouter);

// ✅ Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// ✅ Start Server
const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log('✅ Data Source has been initialized!');

        const server = app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });

        process.on('unhandledRejection', (err: Error) => {
            console.error('Unhandled Promise rejection:', err);
            server.close(() => process.exit(1));
        });
    } catch (err) {
        console.error('❌ Error during Data Source initialization:', err);
        process.exit(1);
    }
};

startServer();
