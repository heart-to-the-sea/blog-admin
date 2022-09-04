import { defineNuxtPlugin } from "#app";
import ElementPlus from "element-plus";
export default defineNuxtPlugin((nuxtApp) => {
  console.log("ement plus", ElementPlus);

  nuxtApp.vueApp.use(ElementPlus.install);
});
