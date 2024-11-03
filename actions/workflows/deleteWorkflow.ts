"use server";

import { waitFor } from "@/lib/helper/waitFor";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function DeleteWorkflow(id: string) {
  const { userId } = auth();

  if (!userId) {
    throw new Error("unathenticated");
  }

  await prisma.workflow.delete({
    where: {
      id,
      userId,
    },
  });

  revalidatePath("/workflows");
}
