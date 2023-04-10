import { Router, type RequestHandler } from 'express';
import healthCheck from '../controllers/healthController';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter
  .get('/healthz', healthCheck as RequestHandler)
  .get('/products', productsController.listAllProducts as RequestHandler)

export default productsRouter;