import express, { json } from 'express'
import morgan from 'morgan'

const backend = express();

// Import routes
import backendRoutes from './routes/backend';

// Middlewares
app.use(morgan('dev'));
app.use(json());

export default backend;
