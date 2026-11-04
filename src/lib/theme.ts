import { useCallback, useEffect, useState } from "react";

export type ThemeColor = "a" | "b";
export type ThemeMode = "light" | "dark";

export const PALETTES: Record<ThemeColor, { dark: string; light: string; label: string }> = {
  a: { dark: "#3e1b17", light: "#bee1e5", label: "ブラウン × ブルー" },
  b: { dark: "#0c4de9", light: "#efaf10", label: "ブルー × イエロー" },
};

const COLOR_KEY = "theme-color";
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

function apply(color: ThemeColor, mode: ThemeMode) {
  const root = document.documentElement;
  root.dataset.color = color;
  root.dataset.mode = mode;
  // iOS Safari などのアドレスバーの色も背景色に合わせる
  const p = PALETTES[color];
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", mode === "light" ? p.light : p.dark);
}

/** 配色 (2色) とライト / ダークを管理する。初期値は index.html のスクリプトが設定したもの */
export function useTheme() {
  const [color, setColorState] = useState<ThemeColor>(
    () => (document.documentElement.dataset.color as ThemeColor) ?? "a",
  );
  const [mode, setModeState] = useState<ThemeMode>(
    () => (document.documentElement.dataset.mode as ThemeMode) ?? systemMode(),
  );

  useEffect(() => apply(color, mode), [color, mode]);

  // 自分で切り替えていない間は、OS のライト / ダーク設定の変更に追従する
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!store.get(MODE_KEY)) setModeState(systemMode());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setColor = useCallback((c: ThemeColor) => {
    store.set(COLOR_KEY, c);
    setColorState(c);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((m) => {
      const next = m === "light" ? "dark" : "light";
      store.set(MODE_KEY, next);
      return next;
    });
  }, []);

  return { color, mode, setColor, toggleMode };
}
