import { useSyncExternalStore } from "react";

/**
 * ライト / ダークの設定。
 * - system: 閲覧者の OS の設定に合わせる (初期値)
 * - light / dark: メニューで選んだもの。localStorage に保存する
 * 描画前の初期適用は index.html のスクリプトで行う。
 */
export type ThemePref = "system" | "light" | "dark";

/** こげ茶と水色。ライトは水色の背景にこげ茶の文字、ダークはその逆 */
export const COLORS = { dark: "#3e1b17", light: "#bee1e5" } as const;

const KEY = "theme-mode";
const mq = window.matchMedia("(prefers-color-scheme: dark)");
const listeners = new Set<() => void>();

function readPref(): ThemePref {
  try {
    const v = localStorage.getItem(KEY);
    return v === "light" || v === "dark" ? v : "system";
  } catch {
    return "system";
  }
}

let pref = readPref();

function apply() {
  const mode = pref === "system" ? (mq.matches ? "dark" : "light") : pref;
  document.documentElement.dataset.mode = mode;
  // iOS Safari などのアドレスバーの色も背景色に合わせる
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", mode === "light" ? COLORS.light : COLORS.dark);
}

apply();

// 「自動」の間は、OS の設定が変わったらすぐ追従する
mq.addEventListener("change", () => {
  if (pref === "system") apply();
});

export function setThemePref(next: ThemePref) {
  pref = next;
  try {
    if (next === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, next);
  } catch {
    // プライベートブラウズなどで保存できなくても表示は切り替える
  }
  apply();
  listeners.forEach((l) => l());
}

export function useThemePref(): ThemePref {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => pref,
  );
}
