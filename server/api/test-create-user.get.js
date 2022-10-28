import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export default defineEventHandler(() => {
  const user = prismaClient.user.create({
    data: {
      nickname: 'Ryan',
      email: 'ryanchien8125@gmail.com',
      password: '123456',
      avatar: '',
      emailVerified: true,
    },
  });
  return user;
});
