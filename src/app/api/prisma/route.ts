import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  const now = Date.now();

  await prisma.user.create({
    data: {
      email: `${now}@example.com`,
      name: `${now}`,
    },
  });

  const users = await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
    take: 5,
  });

  return NextResponse.json({ hello: "prisma", users });
}
