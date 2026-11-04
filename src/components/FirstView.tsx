import Scroll from "./parts/Scroll";
import styles from "./FirstView.module.css";

export default function FirstView() {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.label}>Portfolio</p>
        <h1 className={styles.name}>Yuka</h1>
        <p className={styles.role}>Web Engineer</p>
      </div>
      <Scroll className={styles.scroll} />
    </header>
  );
}
