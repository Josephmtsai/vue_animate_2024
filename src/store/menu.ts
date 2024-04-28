import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
  state: (): { selectMenu: string[] } => {
    return { selectMenu: [] };
  },
  actions: {
    loadFromStorage() {
      const menu = localStorage.getItem('menu');
      if (menu) {
        this.selectMenu = JSON.parse(menu);
      }
    },
    setMenuStore(menu: string[]) {
      this.selectMenu = menu;
      localStorage.setItem('menu', JSON.stringify(menu));
    },
    isMenuActive(key: string) {
      return this.selectMenu.includes(key);
    },
  },
});
