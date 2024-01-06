"use client";

import { auth } from "@/app/api/auth/[...nextauth]/auth";
import { signIn, signOut } from "next-auth/react";

export const Auth = async () => {
  const session = await auth();
  console.log("session", session);

  return session ? (
    <button onClick={() => signIn()}>Login</button>
  ) : (
    <button onClick={() => signOut()}>Logout</button>
  );
};
