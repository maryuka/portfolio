"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./ParallaxImage.module.css";

/** 旧 v-parallax 相当。スクロールに合わせて背景画像をゆっくり動かす */
export default function ParallaxImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={styles.parallax}>
      <motion.img src={src} alt="" className={styles.img} style={{ y }} />
    </div>
  );
}
