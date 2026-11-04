import { img } from "@/lib/asset";
import type { ReactNode } from "react";
import { ja } from "@/lib/messages";
import Section from "./parts/Section";
import Title from "./parts/Title";
import styles from "./Works.module.css";

type WorkKey = keyof typeof ja.Works.item;

type Work = {
  key: WorkKey;
  image?: { src: string; alt: string };
};

const WORKS: Work[] = [
  { key: "freee" },
  { key: "bitriver" },
  { key: "worldclean", image: { src: img("worksWorldClean.webp"), alt: "清掃管理アプリのスクリーンショット" } },
  { key: "portfolio", image: { src: img("worksPortfolio.webp"), alt: "ポートフォリオサイトのスクリーンショット" } },
  { key: "game", image: { src: img("worksgame.webp"), alt: "制作したゲームのスクリーンショット" } },
  { key: "iyah" },
];

function TimelineItem({ date, children }: { date: string; children: ReactNode }) {
  return (
    <li className={styles.item}>
      <p className={`${styles.date} pre-wrap`}>{date}</p>
      <div className={styles.divider}>
        <span className={styles.dot} />
      </div>
      <div className={styles.body}>{children}</div>
    </li>
  );
}

export default function Works() {
  return (
    <Section id="Works" className={styles.sheet}>
      <Title title={ja.Works.title} />
      <ol className={styles.timeline}>
        {WORKS.map(({ key, image }) => {
          const item = ja.Works.item[key];
          return (
            <TimelineItem key={key} date={item.date}>
              <div>
                <span className={`${styles.title} pre-wrap`}>{item.title}</span>
              </div>
              <p className={`${styles.text} pre-wrap`}>{item.text}</p>
              {image && <img className={styles.img} src={image.src} alt={image.alt} />}
            </TimelineItem>
          );
        })}
      </ol>
    </Section>
  );
}
