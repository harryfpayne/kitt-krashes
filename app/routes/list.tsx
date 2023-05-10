import type { LoaderFunction } from "@remix-run/node";
import { prisma } from "~/db.server";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const res = await prisma.crash.findMany();
    return new Response(JSON.stringify(res));
  } catch (error: unknown) {
    return new Response("ERROR", { status: 500 });
  }
};