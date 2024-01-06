import { auth } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  const noWIsoString = new Date().toLocaleString();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <h1>Protected Page Example</h1>
      <p>{noWIsoString}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
