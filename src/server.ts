import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import productsRouter from './routes/productsRouter';

dotenv.config();
const port = process.env.BACKEND_PORT ?? 5000;

const server = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'You have exceeded the 100 requests in 15 min limit!',
  standardHeaders: true,
  legacyHeaders: false
});

server
  .use(json())
  .use(cors())
  .use(limiter)

  .use(productsRouter)

  .listen(port, () => {
    console.log(`Listening at ${port}!`);
  });

export default server;
