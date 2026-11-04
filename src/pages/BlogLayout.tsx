import { Outlet } from "react-router";
import styles from "./Blog.module.css";

export default function BlogLayout() {
  return (
    <div className={styles.sheet}>
      <h2 className={styles.title}>日常</h2>
      <div className={styles.topBg} />
      <div className={styles.box}>
        <Outlet />
      </div>
    </div>
  );
}
