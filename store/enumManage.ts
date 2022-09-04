import { defineStore, StateTree } from "pinia";

export const useEnumManage = defineStore("enumManage", {
  state: () => ({
    action: {
      id: 1,
    },
    enums: [],
  }),
  actions: {
    setAction(action: any) {
      this.action = action;
    },
  },
});
