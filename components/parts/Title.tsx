"use client";

import { motion } from "motion/react";
import NemophilaIcon from "./NemophilaIcon";
import styles from "./Title.module.css";

export default function Title({ title }: { title: string }) {
  return (
    <h1 className={`${styles.title} is_en`}>
      <NemophilaIcon className={styles.icon} />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {title}
      </motion.div>
    </h1>
  );
}
