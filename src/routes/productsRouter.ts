import { Router, type RequestHandler } from 'express';
import productsController from '../controllers/productsController';

const productsRouter = Router();

productsRouter
  .get('/products', productsController.listAllProducts as RequestHandler);

export default productsRouter;
