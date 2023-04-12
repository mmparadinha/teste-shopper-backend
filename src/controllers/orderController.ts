import type { Request, Response } from 'express';
import orderService from '../services/orderService';

async function registerOrder (req: Request, res: Response) {
  const orderInfo = req.body;

  try {
    await orderService.createOrder(orderInfo);

    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

const productsController = {
  registerOrder
};

export default productsController;
