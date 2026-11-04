import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ja } from "@/lib/messages";
import ModeSelect from "./ModeSelect";
import styles from "./MenuButton.module.css";

const LINKS = [
  { href: "#About", label: ja.Menu.about },
  { href: "#Works", label: ja.Menu.works },
  { href: "#Skills", label: ja.Menu.skills },
  { href: "#Contact", label: ja.Menu.contact },
];

const preventScroll = (e: Event) => e.preventDefault();

export default function MenuButton() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  // ファーストビュー(〜900px)を過ぎたらハンバーガーを表示
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(!(-10 < y && y < 900));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // メニュー表示中は背面のスクロールを止める
  useEffect(() => {
    if (!active) return;
    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
      document.body.style.overflow = "";
    };
  }, [active]);

  const toggle = () => setActive((a) => !a);

  return (
    <nav>
      <button
        type="button"
        aria-label={active ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={active}
        className={`${styles.hamburger} ${visible || active ? styles.shown : ""}`}
        onClick={toggle}
      >
        <span className={`${styles.line} ${styles.line1} ${active ? styles.active1 : ""}`} />
        <span className={`${styles.line} ${styles.line2} ${active ? styles.active2 : ""}`} />
        <span className={`${styles.line} ${styles.line3} ${active ? styles.active3 : ""}`} />
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            className={styles.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <ul>
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link} onClick={() => setActive(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ModeSelect />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
