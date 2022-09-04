import { getTransitionRawChildren } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";
export default defineStore<string, any, any>("login", {
  state: () => {
    store: "";
  },
  getters: {
    getStore(state) {
      return state.store;
    },
  },
  actions: {
    login(state) {
      state.store;
    },
  },
});
