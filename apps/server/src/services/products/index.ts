// import { Prisma } from '@repo/db'
import { Product } from '@repo/schemas';
import { prisma } from '../../lib/prisma-client';

export class ProductsService {
  async list(): Promise<Product[]> {
    const result = await prisma.product.findMany({
      include: {
        variants: {
          select: {
            price: true,
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
    });

    return result.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
      price: item.variants[0].price,
    }));
  }
}
