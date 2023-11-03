// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons",'nuxt-swiper','@element-plus/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      apiVersion: process.env.NUXT_PUBLIC_API_VERSION,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  devtools: { enabled: true },
});
