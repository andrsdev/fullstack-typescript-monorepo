// import { Prisma } from '@repo/db'
import { prisma } from '../../lib/prisma-client';

export class CollectionsService {
  async list() {
    const result = await prisma.collection.findMany();
    return result;
  }
}
