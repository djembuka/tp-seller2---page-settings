const Store = {
  state: {
    step: 'step1', //step1 - catalog of pages, step2 - block and its templates, step3 - block's template settings
    render: true,
    buttons: [
      {
        code: 'cancel',
        name: 'Отмена',
      },
      {
        code: 'save',
        name: 'Сохранить',
      },
    ],
    onSave: {
      url: 'response.json',
      action: 'twinpx:seller.api.methods.save',
    },
    lang: {
      settingsTitle: 'Настройки блока',
      settingsText: 'Отредактируйте свойства блока.',
      edit: 'Изменить',
    },
  },
  mutations: {
    setStructure(state, structure) {
      state.data = structure;
      state.structureLoaded = true;
    },
    setPageActive(state, { pageIndex, pageId }) {
      state.data.sites[0].pages.forEach((page, index) => {
        if (pageIndex !== undefined) {
          page.active = index === pageIndex;
        } else if (pageId !== undefined) {
          page.active = page.id === pageId;
        }
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

          if (t.settings && memoryBlock.settings) {
            t.settings.forEach((s, i) => {
              s.value = memoryBlock.settings[i];
            });
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

            if (t.settings) {
              t.settings.forEach((s, i) => {
                s.value = memoryBlock.settings[i];
              });
            }
          });
        });
      });
    },
    setRender(state, render) {
      state.render = render;
    },
    setBlockProp(state, { blockId, property, value }) {
      let page = state.data.sites[0].pages.find((page) => page.active);
      page = page || state.data.sites[0].pages[0];

      let block;
      ['top', 'other', 'bottom'].forEach((type) => {
        if (!block) {
          block = page.blocks[type].find((b) => b.id === blockId);
        }
      });

      if (block) {
        block[property] = value;
      }
    },
    changeBlocksRender(state, payload) {
      state.blocksRender = payload;
    },
    changeStep(state, step) {
      state.step = step;
    },
    setBlockIsEdited(state, { pageId, blockId, isEdited }) {
      let block;

      Object.values(state.data.sites[0].pages).forEach((page) => {
        if (page.id === pageId) {
          ['top', 'other', 'bottom'].forEach((type) => {
            if (!block) {
              block =
                page.blocks[type].find((block) => block.id === blockId) ||
                block;
            }
          });
        }
      });

      block.isEdited = isEdited;
    },
    initVariantChecked(state) {
      Object.values(state.data.sites[0].pages).forEach((page) => {
        if (page.blocks) {
          ['top', 'other', 'bottom'].forEach((type) => {
            page.blocks[type].forEach((block) => {
              const checkedVariant = block.variants.find((v) => v.checked);
              if (!checkedVariant) {
                block.variants[0].checked = true;
              }
            });
          });
        }
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
    setControlValue(state, { blockId, templateId, controlId, value }) {
      let block = Object.values(state.data.scaffold).find(
        (staticBlock) => staticBlock.id === blockId
      );
      if (!block) {
        Object.values(state.data.pages).forEach((page) => {
          block = page.blocks.find((block) => block.id === blockId) || block;
        });
      }

      const template = block.templates.find(
        (template) => template.id === templateId
      );

      const control = template.settings.find((s) => s.id === controlId);
      control.value = value;
    },
  },
  getters: {
    activePage(state) {
      const activePage = state.data.sites[0].pages.find((page) => page.active);
      return activePage || state.data.sites[0].pages[0];
    },
    isEditedBlock(state) {
      let block;

      Object.values(state.data.sites[0].pages).forEach((page) => {
        ['top', 'other', 'bottom'].forEach((type) => {
          if (!block) {
            block = page.blocks[type].find((block) => block.isEdited) || block;
          }
        });
      });

      return block;
    },
  },
  actions: {
    async loadStructure({ commit }) {
      const sites = await bxAjaxRunAction({ type: 'sites' });
      const pages = await bxAjaxRunAction({
        type: 'pages',
        payload: {
          data: {
            sid: sites[0].id,
          },
        },
      });
      const blocks = await bxAjaxRunAction({
        type: 'blocks',
        payload: {
          data: {
            sid: sites[0].id,
            page: pages[0].id,
          },
        },
      });

      const structure = {
        sites,
      };

      structure.sites[0].pages = pages;
      structure.sites[0].pages[0].blocks = blocks;

      commit('setStructure', structure);

      async function bxAjaxRunAction({ type, payload }) {
        let result;
        const BX = window.BX;

        if (BX) {
          const response = BX.ajax.runAction(
            `twinpx:seller.api.methods.${type}`,
            payload
          );
          await response.then((r) => {
            if (r.status === 'success' && r.data) {
              result = r.data;
            }
          });
        }

        return result;
      }
    },
  },
};

export default Store;
