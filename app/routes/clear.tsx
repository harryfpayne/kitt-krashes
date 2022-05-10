import { ActionFunction, redirect } from "@remix-run/node";
import * as crashes from "../models/crash.server";

export const action: ActionFunction = async ({
  request,
}) => {
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
