import { prisma } from "../../db";
import NextCrud, { PrismaAdapter } from "@premieroctet/next-crud";
import { Post, Prisma, User } from "@prisma/client";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter<User | Post, Prisma.ModelName>({
      prismaClient: prisma,
    }),
    swagger: {
      title: "My API CRUD",
      apiUrl: process.env.API_URL as string,
      config: {
        User: {
          tag: {
            name: "Users",
          },
        },
        Post: {
          tag: {
            name: "Posts",
          },
        },
      },
    },
  });

  return nextCrudHandler(req, res);
};

export default handler;
