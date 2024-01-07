import { DemoForm } from "@/components/Forms/Demo/DemoForm";
import { auth } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div>
      <h1>Server Action Demo</h1>
      <DemoForm />
    </div>
  );
}
