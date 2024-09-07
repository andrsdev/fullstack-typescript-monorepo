import { Product, ProductsQuery } from '@repo/schemas';
import { prisma } from '../../lib/prisma-client';
import type { Prisma } from '@repo/db';

export class ProductsService {
  async list({ collection, sort }: ProductsQuery): Promise<Product[]> {
    const where: Prisma.ProductFindManyArgs['where'] = {};

    if (collection) {
      where.collections = {
        some: {
          id: collection,
        },
      };
    }

    const result = await prisma.product.findMany({
      where,
      include: {
        variants: {
          take: 1,
          select: { price: true },
          orderBy: { price: 'asc' },
        },
      },
    });

    const items = result.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      image: item.image,
      price: item.variants[0].price,
    }));

    if (sort === 'price-asc') {
      items.sort((a, b) => a.price - b.price);
    }

    if (sort === 'price-desc') {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  }
}
