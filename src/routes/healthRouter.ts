import { Router, type RequestHandler } from 'express';
import healthCheck from '../controllers/healthController';

const productsRouter = Router();

productsRouter
  .get('/healthz', healthCheck as RequestHandler);

export default productsRouter;
