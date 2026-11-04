import { ja } from "@/lib/messages";
import Section from "./parts/Section";
import Title from "./parts/Title";
import FadeIn from "./parts/FadeIn";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="About" className={styles.sheet}>
      <Title title={ja.About.title} />
      <FadeIn>
        <div className={styles.profile}>
          <div className={styles.txtBox}>
            <h1 className={`${styles.profileTitle} is_en pre-wrap`}>{ja.About.profile.title}</h1>
            <p className={`${styles.txt} pre-wrap`}>{ja.About.profile.text}</p>
            <div className={styles.sns}>
              <a href="https://x.com/y_flos09" aria-label="X">
                <img src="/img/x.png" alt="X" className={styles.snsIcon} />
              </a>
              <a href="https://github.com/maryuka" aria-label="GitHub">
                <img src="/img/github.png" alt="GitHub" className={styles.snsIcon} />
              </a>
            </div>
          </div>
          <div className={styles.imgBox}>
            <img className={styles.img} src="/img/profile.jpg" alt="Yukaのプロフィール写真" />
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
