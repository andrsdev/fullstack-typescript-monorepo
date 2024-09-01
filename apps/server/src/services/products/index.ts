// import { Prisma } from '@repo/db'
import { prisma } from '../../lib/prisma-client';

export class ProductsService {
  async getProducts() {
    const products = await prisma.product.findMany({
      include: {
        options: {
          include: {
            values: true,
          },
        },
        variants: {
          include: {
            optionValues: true,
          },
        },
      },
    });
    return products;
  }
}
