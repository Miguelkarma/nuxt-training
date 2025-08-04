import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  alias: {
    assets: "/<rootDir>/assets",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/content", "@pinia/nuxt"],
  vite: {
    plugins: [tailwindcss()],
  },
});
