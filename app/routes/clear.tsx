import type {ActionFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import * as crashes from "../models/crash.server";

export const action: ActionFunction = async () => {
  await crashes.clear();
  return redirect(`/`);
};

export default function Index() {
  return (
    <div>
      ok
    </div>
  );
}
