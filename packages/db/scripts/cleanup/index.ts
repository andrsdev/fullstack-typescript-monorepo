import { PrismaClient } from '@prisma/client';
import { cleanup } from './cleanup';

const prisma = new PrismaClient();

async function main() {
  await cleanup(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
