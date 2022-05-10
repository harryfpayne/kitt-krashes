import type {ActionFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import * as crashes from "../models/crash.server";

export const action: ActionFunction = async ({
  request,
}) => {
  const form = await request.formData();
  if (!form.has("IsoString")) {
    await crashes.create();
    return redirect(`/`);
  }
  const isoString = form.get("IsoString");

  if (typeof isoString !== "string") {
    throw new Error("invalid isoString")
  }
  const date = new Date(isoString);
  if (isNaN(date.getTime())) {
    throw new Error("invalid isoString")
  }

  await crashes.create(date);
  return redirect(`/`);
};

export default function Index() {
  return (
    <div>
      ok
    </div>
  );
}
