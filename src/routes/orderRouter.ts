import { Router, type RequestHandler } from 'express';
import orderController from '../controllers/orderController';

const orderRouter = Router();

orderRouter
  .post('/order', orderController.registerOrder as RequestHandler)

export default orderRouter;