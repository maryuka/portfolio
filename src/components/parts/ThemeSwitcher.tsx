import { useTheme } from "@/lib/theme";
import styles from "./ThemeSwitcher.module.css";

/** ライト / ダークの切り替えボタン */
export default function ThemeSwitcher() {
  const { mode, toggleMode } = useTheme();
  const label = mode === "light" ? "ダークモードにする" : "ライトモードにする";

  return (
    <button type="button" className={styles.switcher} aria-label={label} title={label} onClick={toggleMode}>
      {mode === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
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
