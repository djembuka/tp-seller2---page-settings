import controls from './controls';

const Store = {
  modules: {
    controls,
  },
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
    formDataWatcher: false, //to force method of creating new FormData() to sent settings
    memory: null,
  },
  mutations: {
    clearInputFile(_, { control }) {
      control.clearWatcher = !control.clearWatcher;
    },
    setFormDataWatcher(state) {
      state.formDataWatcher = !state.formDataWatcher;
    },
    setVariantFormData(_, { variant, formData }) {
      variant.formData = formData;
    },
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
    //memory
    setMemory(state, payload) {
      state.memory = payload;
    },
    sortBlocks(_, { sortedArray, page }) {
      const blocks = [];
      sortedArray.forEach((id) => {
        blocks.push(page.blocks.other.find((b) => String(b.id) === String(id)));
      });
      page.blocks.other = blocks;
    },
    resetBlocksOrder(state, { page }) {
      if (!state.memory) {
        return;
      }
      const blocks = [];
      state.memory.forEach((id) => {
        const b = page.blocks.other.find((b) => String(b.id) === String(id));
        blocks.push(b);
      });
      page.blocks.other = blocks;
      state.memory = null;
    },
    //end memory
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
    setActiveVariant(_, { block, variantId }) {
      block.activeVariant = variantId;
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
    //memory
    rememberBlocksOrder({ dispatch }, sortedArray) {
      dispatch('sortBlocks', sortedArray);
    },
    resetBlocksOrder({ commit, getters }) {
      commit('resetBlocksOrder', { page: getters.activePage });
    },
    resetBlockVariant({ state, commit, getters }) {
      let memory = state.memory;

      if (memory !== null) {
        commit('setActiveVariant', {
          block: getters.isEditedBlock,
          variantId: memory,
        });
        commit('setMemory', null);
      }
    },
    rememberVariantSettings({ state, commit }, { control }) {
      const memory = state.memory === null ? {} : state.memory;
      if (memory[String(control.id)] === undefined) {
        let value;
        if (control.value.forEach) {
          value = control.value.slice(0);
        } else {
          value = control.value;
        }
        memory[String(control.id)] =
          control.checked !== undefined ? control.checked : value;
      }
      commit('setMemory', memory);
    },
    resetVariantSettings({ state, commit, dispatch }, { variant }) {
      if (state.memory !== null && typeof state.memory === 'object') {
        Object.keys(state.memory).forEach((id) => {
          const property = variant.settings.properties.find(
            (prop) => String(prop.id) === String(id)
          );

          if (property.property === 'file') {
            commit('clearInputFile', { control: property });
          }
          setTimeout(() => {
            const payload = { control: property };
            payload[
              `${typeof state.memory[id] === 'boolean' ? 'checked' : 'value'}`
            ] = state.memory[id];

            dispatch('changeControlValue', payload);
          }, 0);
        });
      }
      setTimeout(() => {
        commit('setMemory', null);
      }, 0);
    },
    //end memory
    sortBlocks({ state, getters, commit }, sortedArray) {
      //remember initial sort
      if (state.memory === null) {
        commit(
          'setMemory',
          getters.activePage.blocks.other.map((b) => b.id)
        );
      }
      //sort blocks
      commit('sortBlocks', { page: getters.activePage, sortedArray });
    },
    setActiveVariant({ state, getters, commit }, variantId) {
      if (state.memory === null) {
        commit('setMemory', getters.isEditedBlock.activeVariant);
      }
      commit('setActiveVariant', {
        block: getters.isEditedBlock,
        variantId: variantId,
      });
    },
    //save button
    async saveBlocks({ state, getters, commit }) {
      switch (state.step) {
        case 'step1':
          if (window.BX) {
            window.BX.ajax
              .runAction(`twinpx:seller.api.methods.saveBlocksOrder`, {
                data: {
                  sid: state.data.sites[0].id,
                  page: getters.activePage.id,
                  section: 'other',
                  blocks: getters.activePage.blocks.other.map((b) => b.id),
                },
              })
              .then(
                (r) => {
                  if (r.status === 'success') {
                    if (state.alert) {
                      const step = state.alert;
                      commit('setAlert', false);
                      commit('changeStep', step);
                    }
                  }
                },
                (error) => {
                  console.log(error);
                }
              );

            commit('setMemory', null);
          }
          break;
        case 'step2':
          //save variant
          if (window.BX) {
            window.BX.ajax
              .runAction(`twinpx:seller.api.methods.saveBlocksSettings`, {
                data: {
                  sid: state.data.sites[0].id,
                  page: getters.activePage.id,
                  block: getters.isEditedBlock.id,
                  settings: `{activeVariant: ${getters.isEditedBlock.activeVariant}}`,
                },
              })
              .then(
                (r) => {
                  if (r.status === 'success') {
                    if (state.alert) {
                      const step = state.alert;
                      commit('setAlert', false);
                      commit('changeStep', step);
                    }
                  }
                },
                (error) => {
                  console.log(error);
                }
              );

            commit('setMemory', null);
          }
          break;
        case 'step3':
          {
            let block, variant;
            block = getters.isEditedBlock;
            if (!block) return;

            variant = block.variants.find((v) => v.id === block.activeVariant);
            if (!variant) return;

            commit('setMemory', null);

            let formData = variant.formData;

            if (!formData) {
              formData = new FormData();
            }

            formData.append('sid', state.data.sites[0].id);
            formData.append('page', getters.activePage.id);
            formData.append('block', block.id);
            formData.append('variant', variant.id);
            formData.append('settings', JSON.stringify(variant.settings));

            window.BX.ajax.runAction(
              `twinpx:seller.api.methods.saveBlocksSettings`,
              {
                data: formData,
              }
            );
          }
          break;
      }
    },
    //cancel button
    resetBlocks({ state, getters, commit, dispatch }) {
      let variant;
      switch (state.step) {
        case 'step1':
          commit('resetBlocksOrder', { page: getters.activePage });
          break;
        case 'step2':
          dispatch('resetBlockVariant');
          break;
        case 'step3':
          variant = getters.isEditedBlock.variants.find(
            (v) => String(v.id) === String(getters.isEditedBlock.activeVariant)
          );
          dispatch('resetVariantSettings', { variant });
          break;
      }
      setTimeout(() => {
        if (state.alert) {
          const step = state.alert;
          commit('setAlert', false);
          commit('changeStep', step);
        }
      }, 0);
    },
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
      let sites, settings, pages, blocks;

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

      await bxAjaxRunAction('settings', { data: { sid: sites[0].id } }).then(
        (s) => {
          settings = s;
        }
      );

      const structure = {
        sites,
      };

      structure.sites[0].settings = settings;
      structure.sites[0].settings.id = 'settings';
      structure.sites[0].settings.name = 'Общие настройки';
      structure.sites[0].settings.text =
        'Используйте данный раздел, чтобы загрузить или отредактировать базовые элементы вашего сайта.';
      structure.sites[0].settings.icon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iSWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOCAtMTg4KSI+CiAgICA8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMyw4SDVBMi42NTIsMi42NTIsMCwwLDAsOCw1VjNBMi42NTIsMi42NTIsMCwwLDAsNSwwSDNBMi42NTIsMi42NTIsMCwwLDAsMCwzVjVBMi42NTIsMi42NTIsMCwwLDAsMyw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE5MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMTZhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggaWQ9IlZlY3Rvci0yIiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTMsOEg1QTIuNjUyLDIuNjUyLDAsMCwwLDgsNVYzQTIuNjUyLDIuNjUyLDAsMCwwLDUsMEgzQTIuNjUyLDIuNjUyLDAsMCwwLDAsM1Y1QTIuNjUyLDIuNjUyLDAsMCwwLDMsOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMiAxOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMwYTE2YWEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGlkPSJWZWN0b3ItMyIgZGF0YS1uYW1lPSJWZWN0b3IiIGQ9Ik0zLDhINUEyLjY1MiwyLjY1MiwwLDAsMCw4LDVWM0EyLjY1MiwyLjY1MiwwLDAsMCw1LDBIM0EyLjY1MiwyLjY1MiwwLDAsMCwwLDNWNUEyLjY1MiwyLjY1MiwwLDAsMCwzLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjIgMjAyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGExNmFhIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBpZD0iVmVjdG9yLTQiIGRhdGEtbmFtZT0iVmVjdG9yIiBkPSJNMyw4SDVBMi42NTIsMi42NTIsMCwwLDAsOCw1VjNBMi42NTIsMi42NTIsMCwwLDAsNSwwSDNBMi42NTIsMi42NTIsMCwwLDAsMCwzVjVBMi42NTIsMi42NTIsMCwwLDAsMyw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDIwMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMTZhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGcgaWQ9IlZlY3Rvci01IiBkYXRhLW5hbWU9IlZlY3RvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4IDE4OCkiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAiPgogICAgICA8cGF0aCBkPSJNMCwwSDI0VjI0SDBaIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHBhdGggZD0iTSAxIDEgTCAxIDIzIEwgMjMgMjMgTCAyMyAxIEwgMSAxIE0gMCAwIEwgMjQgMCBMIDI0IDI0IEwgMCAyNCBMIDAgMCBaIiBzdHJva2U9Im5vbmUiIGZpbGw9IiMwYTE2YWEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=';

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
