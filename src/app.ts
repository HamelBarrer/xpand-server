import cors from 'cors';
import express from 'express';
import noteRoute from './note/route/v1/noteRoute';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/notes', noteRoute);

export default app;
