import prisma from '../database/database';

async function getAllProducts () {
  return await prisma.product.findMany({
    where: {
      active: true
    },
    orderBy: {
      name: 'asc'
    }
  });
}

const productsRepository = {
  getAllProducts
};

export default productsRepository;
