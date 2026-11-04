import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

/** こげ茶と水色。ライトは水色の背景にこげ茶の文字、ダークはその逆 */
export const COLORS = { dark: "#3e1b17", light: "#bee1e5" } as const;

const MODE_KEY = "theme-mode";

const store = {
  get(key: string) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // プライベートブラウズなどで保存できなくても表示は切り替える
    }
  },
};

const systemMode = (): ThemeMode =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

function apply(mode: ThemeMode) {
  document.documentElement.dataset.mode = mode;
  // iOS Safari などのアドレスバーの色も背景色に合わせる
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", mode === "light" ? COLORS.light : COLORS.dark);
}

/** ライト / ダークを管理する。初期値は index.html のスクリプトが設定したもの */
export function useTheme() {
  const [mode, setModeState] = useState<ThemeMode>(
    () => (document.documentElement.dataset.mode as ThemeMode) ?? systemMode(),
  );

  useEffect(() => apply(mode), [mode]);

  // 自分で切り替えていない間は、OS のライト / ダーク設定の変更に追従する
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!store.get(MODE_KEY)) setModeState(systemMode());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((m) => {
      const next = m === "light" ? "dark" : "light";
      store.set(MODE_KEY, next);
      return next;
    });
  }, []);

  return { mode, toggleMode };
}
