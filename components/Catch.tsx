import { ja } from "@/lib/messages";
import styles from "./Catch.module.css";

export default function Catch() {
  return (
    <div className={styles.box}>
      <p className={`${styles.catch} pre-wrap`}>{ja.Catch.title1}</p>
      <p className={`${styles.txt} pre-wrap`}>{ja.Catch.text}</p>
    </div>
  );
}
