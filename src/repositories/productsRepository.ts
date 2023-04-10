import prisma from '../database/database';

async function getAllProducts () {
  return await prisma.product.findMany();
}

const productsRepository = {
  getAllProducts
};

export default productsRepository;