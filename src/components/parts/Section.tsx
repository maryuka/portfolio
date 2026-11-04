import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  className?: string;
  boxClassName?: string;
  children: ReactNode;
};

/** 旧 v-sheet + v-container(960px / 700px / auto) の組み合わせ */
export default function Section({ id, className = "", boxClassName = "", children }: Props) {
  return (
    <section id={id} className={`${styles.sheet} ${className}`}>
      <div className={`${styles.box} ${boxClassName}`}>{children}</div>
    </section>
  );
}
