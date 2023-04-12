import productsRepository from '../repositories/productsRepository';

async function getAllProducts () {
  return await productsRepository.getAllProducts();
}

const productsService = {
  getAllProducts
};

export default productsService;
