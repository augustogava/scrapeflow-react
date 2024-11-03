"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function GetCredentialsForUser() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthenticated");
  }

  return prisma.credential.findMany({
    where: { userId },
    orderBy: {
      name: "asc",
    },
  });
}
