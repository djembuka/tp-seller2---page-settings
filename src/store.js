const Store = {
  state: {
    step: 'step1', //step1 - catalog of pages, step2 - block and its templates, step3 - block's template settings
    render: true,
    alert: false,
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
    lang: {
      settingsTitle: 'Настройки блока',
      settingsText: 'Отредактируйте свойства блока.',
      edit: 'Изменить',
      tune: 'Настроить',
    },
  },
  mutations: {
    createBlockSettingsMemory(state, { blockId }) {
      const page = state.data.sites[0].pages.find((p) => p.active);
      if (page) {
        let block;
        ['top', 'other', 'bottom'].forEach((type) => {
          if (!block) {
            block = page.blocks[type].find((b) => b.id === blockId);
          }
        });
        if (block) {
          block.settingsMemory = Object.assign({}, block.settings);
        }
      }
    },
    deleteBlockSettingsMemory(state, { blockId }) {
      const page = state.data.sites[0].pages.find((p) => p.active);
      if (page) {
        let block;
        ['top', 'other', 'bottom'].forEach((type) => {
          if (!block) {
            block = page.blocks[type].find((b) => b.id === blockId);
          }
        });
        if (block) {
          delete block.settingsMemory;
        }
      }
    },
    setAlert(state, value) {
      state.alert = value;
    },
    setMemory(state, value) {
      state.memory = value;
    },
    setStructure(state, structure) {
      state.data = structure;
      state.structureLoaded = true;
    },
    setPageBlocks(state, { pageId, blocks }) {
      const page = state.data.sites[0].pages.find((p) => p.id === pageId);
      if (page) {
        page.blocks = blocks;
      }
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
    setRender(state, render) {
      state.render = render;
    },
    setBlockSettings(state, { blockId, settings, property, value }) {
      let page = state.data.sites[0].pages.find((page) => page.active);
      page = page || state.data.sites[0].pages[0];

      let block;
      ['top', 'other', 'bottom'].forEach((type) => {
        if (!block) {
          block = page.blocks[type].find((b) => b.id === blockId);
        }
      });

      if (block) {
        if (property && value) {
          block.settings[property] = value;
        } else if (settings) {
          block.settings = Object.assign({}, settings);
        }
      }
    },
    changeBlocksRender(state, payload) {
      state.blocksRender = payload;
    },
    changeStep(state, step) {
      if (state.memory) {
        state.alert = step;
      } else {
        state.step = step;
      }
    },
    setBlockIsEdited(state, { pageId, blockId, isEdited }) {
      let block;

      state.data.sites[0].pages.forEach((page) => {
        if (page.id === pageId) {
          ['top', 'other', 'bottom'].forEach((type) => {
            if (!block && page.blocks && page.blocks[type]) {
              block =
                page.blocks[type].find((block) => block.id === blockId) ||
                block;
            }
          });
        }
      });

      block.isEdited = isEdited;
    },
    setPreviousVariant(state, { blockId }) {
      let block;
      state.data.sites[0].pages.forEach((page) => {
        if (page.blocks) {
          ['top', 'other', 'bottom'].forEach((type) => {
            block =
              page.blocks[type].find((block) => block.id === blockId) || block;
          });
        }
      });

      block.previousVariant = block.activeVariant;
    },
    setActiveVariant(state, { blockId, variantId }) {
      let block;
      state.data.sites[0].pages.forEach((page) => {
        if (page.blocks) {
          ['top', 'other', 'bottom'].forEach((type) => {
            block =
              page.blocks[type].find((block) => block.id === blockId) || block;
          });
        }
      });

      block.activeVariant = variantId;
    },
    setControlValue(state, { blockId, variantId, controlId, value }) {
      let block;
      const page = state.data.sites[0].pages.find((page) => page.active);

      if (page && page.blocks) {
        ['top', 'other', 'bottom'].forEach((type) => {
          if (!block) {
            block = page.blocks[type].find((block) => block.id === blockId);
          }
        });
      }

      const variant = block.variants.find(
        (variant) => variant.id === variantId
      );

      const control = variant.settings.properties.find(
        (s) => s.id === controlId
      );

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

      state.data.sites[0].pages.forEach((page) => {
        ['top', 'other', 'bottom'].forEach((type) => {
          if (!block && page.blocks && page.blocks[type]) {
            block = page.blocks[type].find((block) => block.isEdited) || block;
          }
        });
      });

      return block;
    },
  },
  actions: {
    async loadPageBlocks({ state, commit }, { pageId }) {
      let blocks;
      const BX = window.BX;

      if (BX) {
        BX.ajax
          .runAction(`twinpx:seller.api.methods.blocks`, {
            data: {
              sid: state.data.sites[0].id,
              page: pageId,
            },
          })
          .then(
            (r) => {
              if (r.status === 'success' && r.data) {
                blocks = r.data;
                commit('setPageBlocks', { pageId, blocks });
              }
            },
            (error) => {
              console.log(error);
            }
          );
      }
    },
    async loadStructure({ commit }, callback) {
      let sites, pages, blocks;

      await bxAjaxRunAction('sites', {})
        .then((s) => {
          sites = s;
          return bxAjaxRunAction('pages', { data: { sid: sites[0].id } });
        })
        .then((p) => {
          pages = p;
          return bxAjaxRunAction('blocks', {
            data: { sid: sites[0].id, page: pages[0].id },
          });
        })
        .then((b) => {
          blocks = b;
        });

      const structure = {
        sites,
      };

      structure.sites[0].pages = pages;
      structure.sites[0].pages[0].blocks = blocks;

      commit('setStructure', structure);
      callback();

      function bxAjaxRunAction(type, payload) {
        return new Promise((res, rej) => {
          const BX = window.BX;

          if (BX) {
            BX.ajax
              .runAction(`twinpx:seller.api.methods.${type}`, payload)
              .then(
                (r) => {
                  if (r.status === 'success' && r.data) {
                    res(r.data);
                  }
                },
                (error) => {
                  rej(error);
                }
              );
          }
        });
      }
    },
  },
};

export default Store;
