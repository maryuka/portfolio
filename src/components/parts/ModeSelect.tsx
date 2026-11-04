import { setThemePref, useThemePref, type ThemePref } from "@/lib/theme";
import styles from "./ModeSelect.module.css";

const OPTIONS: { value: ThemePref; label: string; icon: () => React.JSX.Element }[] = [
  { value: "system", label: "自動", icon: AutoIcon },
  { value: "light", label: "ライト", icon: SunIcon },
  { value: "dark", label: "ダーク", icon: MoonIcon },
];

/** メニュー内のライト / ダーク切り替え。初期値は「自動」(閲覧者の環境に合わせる) */
export default function ModeSelect() {
  const pref = useThemePref();

  return (
    <div className={styles.select} role="radiogroup" aria-label="表示モード">
      {OPTIONS.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={pref === value}
          className={`${styles.option} ${pref === value ? styles.selected : ""}`}
          onClick={() => setThemePref(value)}
        >
          <Icon />
          {label}
        </button>
      ))}
    </div>
  );
}

function AutoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17Z" fill="currentColor" />
    </svg>
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
