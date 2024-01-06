import { ReactNode } from "react";
import styles from "./Main.module.scss";
import { Navigation } from "@/components/Navigation/Navigation";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return (
    <main className={styles.root}>
      <div className={styles.navigation}>
        <Navigation />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
};
