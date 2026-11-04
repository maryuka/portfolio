import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { getArticle, getArticles, getTags } from "./functions/_lib/newt";

/**
 * 開発時のみ /api/* を処理する。本番では Cloudflare Pages Functions (functions/) が担当。
 */
function devApi(token: string | undefined): Plugin {
  return {
    name: "dev-api",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/api", async (req, res, next) => {
        try {
          const url = req.url ?? "";
          let data: unknown;
          if (url === "/articles") data = await getArticles(token);
          else if (url === "/tag") data = await getTags(token);
          else if (url.startsWith("/article/")) data = await getArticle(decodeURIComponent(url.slice(9)), token);
          else return next();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(data));
        } catch (e) {
          res.statusCode = 502;
          res.end(JSON.stringify({ error: String(e) }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), devApi(env.BLOG_ACCESS_TOKEN)],
    resolve: {
      alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
  };
});
