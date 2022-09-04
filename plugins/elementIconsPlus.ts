import { defineNuxtPlugin } from "#app";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
export default defineNuxtPlugin((nuxtApp) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    nuxtApp.vueApp.component(key, component);
  }
});
