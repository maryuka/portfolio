import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', "@nuxt/image"],
  googleFonts: {
    families: {
      families: {
        'Noto+Serif+JP': [400, 500],
        'EB+Garamond': true,
      }
    }
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: ['@/assets/main.scss', '@/assets/css/style.css'],
})