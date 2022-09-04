import { defineStore, StateTree } from "pinia";
interface userInfo {
  username: "";
}

export const useUserInfoStore = defineStore<string, userInfo, {}, {}>(
  "userInfo",
  {
    state: () => ({
      username: "",
    }),
    actions: {
      async init() {},
    },
  }
);
