import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import helmet from 'helmet';

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Hello world!' });
});

export default app;
