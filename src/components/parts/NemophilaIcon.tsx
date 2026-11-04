import { motion } from "motion/react";
import styles from "./NemophilaIcon.module.css";

// 4つの花びらが中心 (5, 8) から外側へ広がって戻るアニメーション
const PETALS = [
  { x: 10, y: 8 },
  { x: 5, y: 3 },
  { x: 5, y: 13 },
  { x: 0, y: 8 },
];

const CENTER = { x: 5, y: 8 };

export default function NemophilaIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.icon} ${className}`}>
      {PETALS.map((p, i) => (
        <motion.div
          key={i}
          className={styles.circle}
          initial={{ opacity: 0, x: p.x, y: p.y }}
          whileInView={{ opacity: 1, x: [p.x, CENTER.x, p.x], y: [p.y, CENTER.y, p.y] }}
          viewport={{ once: true }}
          transition={{
            opacity: { duration: 0.4, delay: 0.4 },
            x: { duration: 0.6, ease: "easeOut", delay: 0.4 },
            y: { duration: 0.6, ease: "easeOut", delay: 0.4 },
          }}
        />
      ))}
    </span>
  );
}
