"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function RemoveWorkflowSchedule(id: string) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unauthenticated");
  }

  await prisma.workflow.update({
    where: { id, userId },
    data: {
      cron: null,
      nextRunAt: null,
    },
  });

  revalidatePath("/workflows");
}
