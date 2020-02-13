import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      name: 'Administrator',
      password: '$2b$10$/1CrKPoRuMweAKDbR9s4xOdOy.cbcUOLkgk7KMBpkyExFQ.afnopq', // 1n14dmin
      role: 'ADMIN',
      class_year: 2000,
      gender: 'MALE',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'member@gmail.com',
      name: 'Member Pertamax',
      password: '$2b$10$/1CrKPoRuMweAKDbR9s4xOdOy.cbcUOLkgk7KMBpkyExFQ.afnopq', // 1n14dmin
      role: 'MEMBER',
      class_year: 2000,
      gender: 'MALE',
    },
  });
}

main().finally(async () => {
  await prisma
  .disconnect()
})
