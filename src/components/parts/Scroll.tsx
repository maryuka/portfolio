import { useEffect, useState } from "react";
import styles from "./Scroll.module.css";

const TEXT = "SCROLL DOWN SCROLL DOWN ";
const CHARS = TEXT.split("");
const DOT_DELAYS = [0, 100, 250, 400];

/** ファーストビュー下部の「SCROLL DOWN」円形テキスト。スクロールすると消える */
export default function Scroll({ className = "" }: { className?: string }) {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(-10 < y && y < 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={className} style={{ opacity: atTop ? 0.8 : 0, transition: "opacity 0.4s ease-out" }}>
      <div className={styles.circle}>
        <div className={styles.inner}>
          {CHARS.map((ch, i) => (
            <span
              key={i}
              className={styles.char}
              style={{ "--deg": `${(360 / CHARS.length) * (i + 1)}deg` } as React.CSSProperties}
            >
              {ch}
            </span>
          ))}
        </div>
        {DOT_DELAYS.map((delay) => (
          <span key={delay} className={styles.dot} style={{ animationDelay: `${delay}ms` }} />
        ))}
      </div>
    </div>
  );
}
