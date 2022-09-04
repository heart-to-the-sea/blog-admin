import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  server: {
    port: 8888,
  },

  css: ["~/assets/index.css"],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "~/assets/therm.less";',
        },
      },
    },
  },
});
