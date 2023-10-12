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
      state.pages.forEach((page) => {
        page.pageStructure.blocks.forEach((block) => {
          block.sort = state.memory[page.pageId][block.blockId];
        });
      });
    },
    setSort(state, { blockId, sort }) {
      let page = state.pages.find((page) => page.active);
      page = page || state.pages[0];
      const block = page.pageStructure.blocks.find(
        (b) => b.blockId === blockId
      );
      if (block) {
        block.sort = sort;
      }
    },
    changeBlocksRender(state, payload) {
      state.blocksRender = payload;
    },
    createMemory(state) {
      state.memory = {};
      state.pages.forEach((page) => {
        state.memory[page.pageId] = {};
        page.pageStructure.blocks.forEach((block) => {
          state.memory[page.pageId][block.blockId] = block.sort;
        });
      });
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
