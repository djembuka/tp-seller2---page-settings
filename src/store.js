const Store = {
  state: {
    ...window.seller2PageSettingsStore,
  },
  mutations: {
    setPageActive(state, { pageIndex, pageId }) {
      state.pages.forEach((page, index) => {
        if (pageIndex !== undefined) {
          page.active = index === pageIndex ? true : false;
        } else if (pageId !== undefined) {
          page.active = page.pageId === pageId ? true : false;
        }
      });
    },
    sortBlocks(state) {
      state.pages.forEach((page) => {
        page.pageStructure.blocks.sort((a, b) => {
          if (a.sort < b.sort) {
            return -1;
          } else if (a.sort > b.sort) {
            return 1;
          }

          return 0;
        });
      });
    },
    resetPages(state) {
      state.pages = window.seller2PageSettingsStore.pages;
    },
    setSort(state, { pageId, blockId, sort }) {
      const page = state.pages.find((p) => p.pageId === pageId);
      const block = page.pageStructure.blocks.find(
        (b) => b.blockId === blockId
      );
      block.sort = sort;

      console.log(state.pages);
    },
  },
  getters: {
    activePage(state) {
      const activePage = state.pages.find((page) => page.active);
      return activePage || state.pages[0];
    },
  },
};

export default Store;
