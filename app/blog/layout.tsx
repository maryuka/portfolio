import type { ReactNode } from "react";
import styles from "./blog.module.css";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.sheet}>
      <h2 className={styles.title}>日常</h2>
      <div className={styles.topBg} />
      <div className={styles.box}>{children}</div>
    </div>
  );
}
