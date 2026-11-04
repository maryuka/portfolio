import Scroll from "./parts/Scroll";
import styles from "./FirstView.module.css";

export default function FirstView() {
  return (
    <div className={styles.box}>
      <img className={styles.thumbnail} src="/img/top.webp" alt="" />
      <h1 className={styles.copy}>
        <div className={`${styles.copyTxt} ${styles.name}`}>Yuka</div>
        <div>
          <span className={`${styles.copyTxt} ${styles.engineer}`}>Engineer</span>
        </div>
      </h1>
      <Scroll className={styles.scroll} />
    </div>
  );
}
