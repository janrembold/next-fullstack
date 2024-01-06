import { auth } from "@/app/api/auth/[...nextauth]/auth";
import styles from "./Header.module.scss";
import { SignOut } from "../Auth/SignOut";
import { SignIn } from "../Auth/SignIn";
import Link from "next/link";

export const Header = async () => {
  const session = await auth();

  return (
    <header className={styles.root}>
      <div>
        <Link href="/">HOME</Link>
      </div>
      <div>{session ? <SignOut /> : <SignIn />}</div>
    </header>
  );
};
