import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectDatabase } from './configs/connection.mongo';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '100mb' }));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Application is running on port ${port}.`);
    connectDatabase();
});
