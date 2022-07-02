import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server ! Let\'s create the Sigma.');
});

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Application is running on port ${port}.`);
});
