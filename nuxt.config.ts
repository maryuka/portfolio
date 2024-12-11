import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@nuxtjs/i18n",
  ],
  devtools: { enabled: true },
  css: ["@/assets/main.scss", "@/assets/css/style.css"],
  googleFonts: {
    families: {
      "Noto+Serif+JP": [400, 600],
      "Sawarabi+Mincho": true,
      "EB+Garamond": true,
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins!.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  runtimeConfig: {
    public: {},
    blogApiToken: process.env.BLOG_ACCESS_TOKEN,
  },
});
