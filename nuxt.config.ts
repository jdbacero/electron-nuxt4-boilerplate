// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  ssr: false, // Disable SSR for Electron
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "./", // Use relative paths
  },
});
