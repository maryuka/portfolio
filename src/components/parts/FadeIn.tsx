import type { ReactNode } from "react";
import { motion } from "motion/react";

/** 画面に入ったときに一度だけ下からふわっと表示する */
export default function FadeIn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
