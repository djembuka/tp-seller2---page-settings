const Store = {
  state: {
    ...window.seller2PageSettingsStore,
    step: 'step1', //step1 - catalog of pages, step2 - block and its templates, step3 - block's template settings
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
        page.pageBlocks.sort((a, b) => {
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
        page.pageBlocks.forEach((block) => {
          block.sort = state.memory[page.pageId][block.blockId];
        });
      });
    },
    setSort(state, { blockId, sort }) {
      let page = state.pages.find((page) => page.active);
      page = page || state.pages[0];
      const block = page.pageBlocks.find((b) => b.blockId === blockId);
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
        page.pageBlocks.forEach((block) => {
          state.memory[page.pageId][block.blockId] = block.sort;
        });
      });
    },
    changeStep(state, step) {
      state.step = step;
    },
    setBlockIsEdited(state, { blockId, isEdited }) {
      let block = Object.values(state.scaffold).find(
        (staticBlock) => staticBlock.blockId === blockId
      );
      if (!block) {
        block = Object.values(state.pages).forEach((page) => {
          page.pageBlocks.find((block) => block.blockId === blockId);
        });
      }

      block.isEdited = isEdited;
    },
  },
  getters: {
    activePage(state) {
      const activePage = state.pages.find((page) => page.active);
      return activePage || state.pages[0];
    },
    isEditedBlock(state) {
      let block = Object.values(state.scaffold).find(
        (staticBlock) => staticBlock.isEdited
      );
      if (!block) {
        block = Object.values(state.pages).forEach((page) => {
          page.pageBlocks.find((block) => block.isEdited);
        });
      }
      return block;
    },
  },
};

export default Store;
