import { auth } from "@/app/api/auth/[...nextauth]/auth";
import styles from "./Navigation.module.scss";
import Link from "next/link";

export const Navigation = async () => {
  const session = await auth();

  return (
    <nav className={styles.root}>
      <p>Public routes</p>
      <ul>
        <li>
          <Link href="/server-example">Server Example</Link>
        </li>
      </ul>

      {session ? (
        <>
          <p>Protected routes</p>
          <ul>
            <li>
              <Link href="/protected">Protected Example</Link>
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};
