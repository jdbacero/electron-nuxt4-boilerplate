import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.scss"],

  ssr: false, // Disable SSR for Electron
  nitro: {
    preset: "static",
  },

  // Runtime config for environment variables
  runtimeConfig: {
    public: {
      socketUrl: process.env.NUXT_PUBLIC_SOCKET_URL || "http://localhost:3001",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
