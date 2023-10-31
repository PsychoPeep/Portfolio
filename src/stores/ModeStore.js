import { defineStore } from "pinia";

export const useModeStore = defineStore("devStore", {
  state: () => ({
    isDevActive: false,
    isDesignActive: false,
  }),
  actions: {
    toggleDev() {
      this.isDevActive = !this.isDevActive;
      this.isDesignActive = false;
    },
    toggleDesign() {
      this.isDesignActive = !this.isDesignActive;
      this.isDevActive = false;
    },
  },
});
