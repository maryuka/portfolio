// 配色の比較用: URL に ?theme=b を付けるとテーマ B で表示する
const theme = new URLSearchParams(window.location.search).get("theme") === "b" ? "b" : "a";
document.documentElement.dataset.theme = theme;
