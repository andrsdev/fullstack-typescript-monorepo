import { PrismaClient } from '../src/index';
import { seed } from './seed';

const prisma = new PrismaClient();

async function main() {
  await seed(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
