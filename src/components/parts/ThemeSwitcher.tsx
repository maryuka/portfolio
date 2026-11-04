import { PALETTES, useTheme, type ThemeColor } from "@/lib/theme";
import styles from "./ThemeSwitcher.module.css";

const COLORS = Object.keys(PALETTES) as ThemeColor[];

export default function ThemeSwitcher() {
  const { color, mode, setColor, toggleMode } = useTheme();

  return (
    <div className={styles.switcher} role="group" aria-label="配色">
      {COLORS.map((c) => {
        const p = PALETTES[c];
        // 今のモードで見える並び (左上 = 文字色、右下 = 背景色) で表示
        const [fg, bg] = mode === "light" ? [p.dark, p.light] : [p.light, p.dark];
        return (
          <button
            key={c}
            type="button"
            className={`${styles.swatch} ${color === c ? styles.selected : ""}`}
            style={{ background: `linear-gradient(135deg, ${fg} 50%, ${bg} 50%)` }}
            aria-label={p.label}
            aria-pressed={color === c}
            title={p.label}
            onClick={() => setColor(c)}
          />
        );
      })}
      <span className={styles.divider} />
      <button
        type="button"
        className={styles.mode}
        aria-label={mode === "light" ? "ダークモードにする" : "ライトモードにする"}
        title={mode === "light" ? "ダークモードにする" : "ライトモードにする"}
        onClick={toggleMode}
      >
        {mode === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="currentColor" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line key={deg} x1="12" y1="2.5" x2="12" y2="4.5" transform={`rotate(${deg} 12 12)`} />
      ))}
    </svg>
  );
}
