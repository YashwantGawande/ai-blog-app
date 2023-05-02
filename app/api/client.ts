import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any/*can be object */).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;