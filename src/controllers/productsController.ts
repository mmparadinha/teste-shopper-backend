import type { Request, Response } from 'express';
import productsService from '../services/productsService';

async function listAllProducts (req: Request, res: Response) {
  try {
    const procuctsList = await productsService.getAllProducts();

    return res.status(200).send(procuctsList);
  } catch (error) {
    return res.sendStatus(500);
  }
}

const productsController = {
  listAllProducts
};

export default productsController;