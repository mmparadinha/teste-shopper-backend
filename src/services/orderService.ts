import type { product } from '@prisma/client';
import orderRepository from '../repositories/orderRepository';

type OrderProduct = product & { amount: number };

async function createOrder (orderInfo: {
  customerName: string
  deliveryDate: Date
  totalCost: number
  products: OrderProduct[]
}) {
  const order = await orderRepository.createOrder(orderInfo);

  for (const element of orderInfo.products) {
    await orderRepository.createOrderProducts(order.id, element.id, element.amount);
    await orderRepository.updateProductStock(element.id, element.amount);
  }
}

const orderService = {
  createOrder
};

export default orderService;
