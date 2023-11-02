import express from 'express';
import cors from 'cors';
import { router } from './router';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT);
