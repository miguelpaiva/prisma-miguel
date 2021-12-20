import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: 'user-1',
      name: 'Miguel',
      email: 'miguel@email.com',
    },
  });
}

main();
