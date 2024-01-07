"use client";

import { signIn } from "next-auth/react";

export function SignIn() {
  return (
    <button onClick={() => signIn("auth0", { callbackUrl: "/" })}>
      Sign In
    </button>
  );
}
