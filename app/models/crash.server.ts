import { prisma } from "~/db.server";
export type { Crash } from "@prisma/client";

export function getLatest() {
  return prisma.crash.findFirst({
    orderBy: {
      createdAt: "desc",
    }
  });
}

export function clear() {
  return prisma.crash.deleteMany({})
}

export function create(createdAt?: Date) {
  if (createdAt !== undefined) {
    return prisma.crash.create({data: {createdAt}});
  }
  return prisma.crash.create({data: {}});
}
