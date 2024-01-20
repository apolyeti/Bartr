// util/db.ts

import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export const getUserById = async (userId: number): Promise<User | null> => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};


// Add more functions as needed
