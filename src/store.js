const Store = {
  state: {
    ...window.seller2PageSettingsStore,
    step: 'step1', //step1 - catalog of pages, step2 - block and its templates, step3 - block's template settings
  },
  mutations: {
    setPageActive(state, { pageIndex, pageId }) {
      state.data.pages.forEach((page, index) => {
        if (pageIndex !== undefined) {
          page.active = index === pageIndex ? true : false;
        } else if (pageId !== undefined) {
          page.active = page.id === pageId ? true : false;
        }
      });
    },
    sortBlocks(state) {
      state.data.pages.forEach((page) => {
        page.blocks.sort((a, b) => {
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
      Object.values(state.data.scaffold).forEach((block) => {
        const memoryBlock = state.memory.scaffold.find(
          (b) => b.blockId === block.id
        );
        block.sort = memoryBlock.sort;
        block.active = memoryBlock.active;
        block.templates.forEach((t) => {
          if (t.id === memoryBlock.templateId) {
            t.checked = true;
          } else if (t.checked) {
            delete t.checked;
          }
        });
      });
      state.data.pages.forEach((page) => {
        const memoryPage = state.memory.pages.find((p) => p.pageId === page.id);
        page.blocks.forEach((block) => {
          const memoryBlock = memoryPage.blocks.find(
            (b) => b.blockId === block.id
          );
          block.sort = memoryBlock.sort;
          block.active = memoryBlock.active;
          block.templates.forEach((t) => {
            if (t.id === memoryBlock.templateId) {
              t.checked = true;
            } else if (t.checked) {
              delete t.checked;
            }
          });
        });
      });
    },
    setBlockProp(state, { blockId, property, value }) {
      let page = state.data.pages.find((page) => page.active);
      page = page || state.data.pages[0];
      const block = page.blocks.find((b) => b.id === blockId);
      if (block) {
        block[property] = value;
      }
    },
    changeBlocksRender(state, payload) {
      state.blocksRender = payload;
    },
    createMemory(state) {
      const scaffoldMemory = [];
      const pagesMemory = [];

      Object.values(state.data.scaffold).forEach((block) => {
        const template = block.templates
          ? block.templates.find((t) => t.checked)
          : null;
        scaffoldMemory.push({
          blockId: block.id,
          sort: block.sort,
          active: block.active,
          templateId: template ? template.id : null,
        });
      });

      state.data.pages.forEach((page) => {
        const blocks = [];
        page.blocks.forEach((block) => {
          const template = block.templates
            ? block.templates.find((t) => t.checked)
            : null;
          blocks.push({
            blockId: block.id,
            sort: block.sort,
            active: block.active,
            templateId: template ? template.id : null,
          });
        });
        pagesMemory.push({
          pageId: page.id,
          blocks,
        });
      });

      state.memory = { scaffold: scaffoldMemory, pages: pagesMemory };
    },
    changeStep(state, step) {
      state.step = step;
    },
    setBlockIsEdited(state, { pageId, blockId, isEdited }) {
      let block = Object.values(state.data.scaffold).find(
        (staticBlock) => staticBlock.id === blockId
      );
      if (!block) {
        Object.values(state.data.pages).forEach((page) => {
          if (page.id === pageId) {
            block = page.blocks.find((block) => block.id === blockId) || block;
          }
        });
      }

      block.isEdited = isEdited;
    },
    initTemplateChecked(state) {
      Object.values(state.data.scaffold).forEach((block) => {
        const checkedTemplate = block.templates.find((t) => t.checked);
        if (!checkedTemplate) {
          block.templates[0].checked = true;
        }
      });
      Object.values(state.data.pages).forEach((page) => {
        page.blocks.forEach((block) => {
          const checkedTemplate = block.templates.find((t) => t.checked);
          if (!checkedTemplate) {
            block.templates[0].checked = true;
          }
        });
      });
    },
    setTemplateChecked(state, { blockId, templateId }) {
      let block = Object.values(state.data.scaffold).find(
        (staticBlock) => staticBlock.id === blockId
      );
      if (!block) {
        Object.values(state.data.pages).forEach((page) => {
          block = page.blocks.find((block) => block.id === blockId) || block;
        });
      }

      block.templates.forEach((template) => delete template.checked);
      block.templates.find(
        (template) => template.id === templateId
      ).checked = true;
    },
  },
  getters: {
    activePage(state) {
      const activePage = state.data.pages.find((page) => page.active);
      return activePage || state.data.pages[0];
    },
    isEditedBlock(state) {
      let block = Object.values(state.data.scaffold).find(
        (staticBlock) => staticBlock.isEdited
      );
      if (!block) {
        Object.values(state.data.pages).forEach((page) => {
          block = page.blocks.find((block) => block.isEdited) || block;
        });
      }
      return block;
    },
  },
};

export default Store;
