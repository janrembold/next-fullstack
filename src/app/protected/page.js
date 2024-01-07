import prisma from "@/lib/prisma";
import { auth } from "../api/auth/[...nextauth]/auth";

export default async function Page() {
  const session = await auth();

  if (!session) {
    // redirect("/");
    return <h1>NOT AUTHENTICATED</h1>;
  }

  const noWIsoString = new Date().toLocaleString();
  const users = await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
    take: 5,
  });

  return (
    <div>
      <h1>Protected Page Example</h1>
      <p>{noWIsoString}</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
