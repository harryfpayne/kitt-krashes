import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Counter } from "~/components/counter";
import type { Crash } from "../models/crash.server";
import * as crashes from "../models/crash.server";

type LoaderData = { crash: Crash | null };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    crash: await crashes.getLatest(),
  };
  return json(data);
};

export default function Index() {
  const {crash} = useLoaderData<LoaderData>();

  return (
    <main className="relative min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        {crash ? (
          <Counter date={new Date(crash.createdAt)} />
        ) : (<p>None</p>)}
        <p className="text-3xl">days since last downtime</p>
      </div>

      <form method="post" action="/new" className="absolute top-1/2 left-1/2">
        <div className="bg-red-100 border-4 border-red-500 fixed right-10 bottom-10 p-10 rounded-full">
          <div className="w-1 h-1 flex justify-center items-center">
              <button type="submit" className="button text-3xl text-white">
                🔥
              </button>
          </div>
        </div>
      </form>
    </main>
  );
}