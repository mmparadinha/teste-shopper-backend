import prisma from '../database/database';

async function createOrder (orderInfo: {
  customerName: string
  deliveryDate: Date
  totalCost: number
}) {
  return await prisma.order.create({
    data: {
      customerName: orderInfo.customerName,
      deliveryDate: orderInfo.deliveryDate,
      totalCost: orderInfo.totalCost
    }
  });
}

async function createOrderProducts (orderId: number, productId: number, amount: number) {
  return await prisma.orderProducts.create({
    data: {
      orderId,
      productId,
      amount
    }
  });
}

async function updateProductStock (productId: number, amount: number) {
  return await prisma.product.update({
    where: {
      id: productId
    },
    data: {
      qty_stock: {
        decrement: amount
      }
    }
  });
}

const productsRepository = {
  createOrder,
  createOrderProducts,
  updateProductStock
};

export default productsRepository;
