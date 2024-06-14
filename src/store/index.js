import controls from './controls';

const Store = {
  modules: {
    controls,
  },
  state: {
    step: 'settings', //step1 - catalog of pages, step2 - block and its templates, step3 - block's template settings, settings - main site settings, colors - colors settings
    render: true,
    alert: false,
    preloader: false,
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
    setAlert(state, value) {
      state.alert = value;
    },
    setPreloader(state, value) {
      state.preloader = value;
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
    resetBlocksOrderEnabled(state, { page }) {
      if (!state.memory) {
        return;
      }

      if (state.memory.order) {
        const blocks = [];
        state.memory.order.forEach((id) => {
          const b = page.blocks.other.find((b) => String(b.id) === String(id));
          blocks.push(b);
        });
        page.blocks.other = blocks;
      }

      if (state.memory.enabled) {
        Object.keys(state.memory.enabled).forEach((id) => {
          const b = page.blocks.other.find((b) => String(b.id) === String(id));
          b.settings.enabled = state.memory.enabled[id];
        });
      }

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
      if (pageId === 'settings' || pageId === 'colors') {
        state.data.sites[0].settings.active = false;
        state.data.sites[0].colors.active = false;

        state.data.sites[0].pages.forEach((page) => {
          page.active = false;
        });

        state.data.sites[0][pageId].active = true;
      } else {
        state.data.sites[0].pages.forEach((page, index) => {
          if (pageIndex !== undefined) {
            page.active = index === pageIndex;
          } else if (pageId !== undefined) {
            page.active = page.id === pageId;
          }
        });
      }
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
        if (property && value !== undefined) {
          block.settings[property] = value;
        } else if (settings) {
          block.settings = Object.assign({}, settings);
        }
      }
    },
    changeStep(state, payload) {
      if (state.memory) {
        if (payload.indexOf('step') >= 0 || payload.indexOf('settings') >= 0) {
          state.alert = { step: payload };
        } else {
          state.alert = { page: payload };
        }
      } else {
        state.step = payload;
      }
    },
    setBlockIsEdited(_, { block, isEdited }) {
      block.isEdited = isEdited;
    },
    setPreviousVariant(state, { pageId, blockId }) {
      if (pageId === 'colors') {
        state.data.sites[0].colors.previousVariant =
          state.data.sites[0].colors.activeVariant;
      } else {
        let block;
        state.data.sites[0].pages.forEach((page) => {
          if (page.blocks) {
            ['top', 'other', 'bottom'].forEach((type) => {
              block =
                page.blocks[type].find((block) => block.id === blockId) ||
                block;
            });
          }
        });

        block.previousVariant = block.activeVariant;
      }
    },
    setActiveVariant(_, { block, variantId }) {
      block.activeVariant = variantId;
    },
  },
  getters: {
    activePage(state) {
      if (state.data.sites[0].settings.active) {
        return state.data.sites[0].settings;
      } else if (state.data.sites[0].colors.active) {
        return state.data.sites[0].colors;
      } else {
        const activePage = state.data.sites[0].pages.find(
          (page) => page.active
        );
        return activePage || null;
      }
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
    setBlockIsEdited(
      { state, getters, commit },
      { pageId, blockId, isEdited }
    ) {
      if (isEdited === false) {
        getters.isEditedBlock.isEdited = isEdited;
      } else {
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

        commit('setBlockIsEdited', { block, isEdited });
      }
    },
    changeStepFromAlert({ state, commit }) {
      let step, pageId;
      step = state.alert.step || 'step1';
      pageId = state.alert.page;

      commit('setAlert', null);
      commit('changeStep', step);
      commit('setPageActive', { pageId });
    },
    //memory
    rememberBlocksOrder({ dispatch }, sortedArray) {
      dispatch('sortBlocks', sortedArray);
    },
    rememberBlocksEnabled({ state, commit }, enabledArray) {
      //remember initial enabled
      if (state.memory === null) {
        commit('setMemory', {
          enabled: enabledArray,
        });
      } else if (!state.memory.enabled) {
        let memory = state.memory;
        memory.enabled = enabledArray;

        commit('setMemory', memory);
      }
    },
    resetBlockVariant({ state, commit, getters }) {
      let memory = state.memory;

      if (memory !== null) {
        commit('setActiveVariant', {
          block:
            state.step === 'colors'
              ? state.data.sites[0].colors
              : getters.isEditedBlock,
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
    resetVariantSettings({ state, commit, dispatch }, { variant, settings }) {
      let sett = settings || variant.settings;

      if (state.memory !== null && typeof state.memory === 'object') {
        Object.keys(state.memory).forEach((id) => {
          const property = sett.properties.find(
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
        commit('setMemory', {
          order: getters.activePage.blocks.other.map((b) => b.id),
        });
      } else if (!state.memory.order) {
        let memory = state.memory;
        memory.order = getters.activePage.blocks.other.map((b) => b.id);

        commit('setMemory', memory);
      }
      //sort blocks
      commit('sortBlocks', { page: getters.activePage, sortedArray });
    },
    setActiveVariant({ state, getters, commit }, variantId) {
      if (state.memory === null) {
        commit(
          'setMemory',
          state.step === 'colors'
            ? state.data.sites[0].colors.activeVariant
            : getters.isEditedBlock.activeVariant
        );
      }
      commit('setActiveVariant', {
        block:
          state.step === 'colors'
            ? state.data.sites[0].colors
            : getters.isEditedBlock,
        variantId: variantId,
      });
    },
    //save button
    async saveBlocks({ state, getters, commit, dispatch }) {
      let flag; //to be sure both methods have worked

      switch (state.step) {
        case 'step1':
          flag = false;

          if (window.BX) {
            commit('setPreloader', true);

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
                  if (flag) {
                    commit('setPreloader', false);
                  }
                  if (r.status === 'success') {
                    if (state.alert && flag) {
                      dispatch('changeStepFromAlert');
                    } else {
                      flag = true;
                    }
                  }
                },
                (error) => {
                  commit('setPreloader', false);
                  console.log(error);
                }
              );

            window.BX.ajax
              .runAction(`twinpx:seller.api.methods.saveBlocksStates`, {
                data: {
                  sid: state.data.sites[0].id,
                  page: getters.activePage.id,
                  section: 'other',
                  enabledBlocks: getters.activePage.blocks.other
                    .filter((b) => b.settings.enabled)
                    .map((b) => b.id),
                  disabledBlocks: getters.activePage.blocks.other
                    .filter((b) => !b.settings.enabled)
                    .map((b) => b.id),
                },
              })
              .then(
                (r) => {
                  if (flag) {
                    commit('setPreloader', false);
                  }
                  if (r.status === 'success') {
                    if (state.alert && flag) {
                      dispatch('changeStepFromAlert');
                    } else {
                      flag = true;
                    }
                  }
                },
                (error) => {
                  commit('setPreloader', false);
                  console.log(error);
                }
              );

            commit('setMemory', null);
          }
          break;
        case 'step2':
          //save variant
          if (window.BX) {
            commit('setPreloader', true);

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
                  commit('setPreloader', false);
                  if (r.status === 'success') {
                    if (state.alert) {
                      dispatch('changeStepFromAlert');
                    }
                  }
                },
                (error) => {
                  commit('setPreloader', false);
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

            let formData = variant.formData || new FormData();

            formData.append('sid', state.data.sites[0].id);
            formData.append('page', getters.activePage.id);
            formData.append('block', block.id);
            formData.append('variant', variant.id);
            formData.append('settings', JSON.stringify(variant.settings));

            if (window.BX) {
              commit('setPreloader', true);

              window.BX.ajax
                .runAction(`twinpx:seller.api.methods.saveBlocksSettings`, {
                  data: formData,
                })
                .then(
                  (r) => {
                    commit('setPreloader', false);
                    if (r.status === 'success') {
                      if (state.alert) {
                        dispatch('changeStepFromAlert');
                      }
                    }
                  },
                  (error) => {
                    commit('setPreloader', false);
                    console.log(error);
                  }
                );
            }
          }
          break;
      }
    },
    async saveSettings({ state, commit, dispatch }) {
      let settings = state.data.sites[0].settings;

      if (!settings) return;

      commit('setMemory', null);

      let formData = settings.formData || new FormData();

      formData.append('sid', state.data.sites[0].id);
      formData.append(
        'settings',
        JSON.stringify({ properties: settings.properties })
      );

      if (window.BX) {
        commit('setPreloader', true);
        window.BX.ajax
          .runAction(`twinpx:seller.api.methods.saveSettings`, {
            data: formData,
          })
          .then(
            () => {
              commit('setPreloader', false);
              dispatch('changeStepFromAlert');
            },
            (error) => {
              commit('setPreloader', false);
              console.log(error);
            }
          );
      }
    },
    //cancel button
    resetBlocks({ state, getters, commit, dispatch }) {
      let variant;

      switch (state.step) {
        case 'step1':
          commit('resetBlocksOrderEnabled', { page: getters.activePage });
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
          dispatch('changeStepFromAlert');
        }
      }, 0);
    },
    resetSettings({ state, dispatch }) {
      dispatch('resetVariantSettings', {
        settings: state.data.sites[0].settings,
      });

      setTimeout(() => {
        if (state.alert) {
          dispatch('changeStepFromAlert');
        }
      }, 0);
    },
    async loadPageBlocks({ state, commit }, { pageId }) {
      let blocks;
      const BX = window.BX;

      if (BX) {
        commit('setPreloader', true);

        BX.ajax
          .runAction(`twinpx:seller.api.methods.blocks`, {
            data: {
              sid: state.data.sites[0].id,
              page: pageId,
            },
          })
          .then(
            (r) => {
              commit('setPreloader', false);
              if (r.status === 'success' && r.data) {
                blocks = r.data;
                commit('setPageBlocks', { pageId, blocks });
              }
            },
            (error) => {
              commit('setPreloader', false);
              console.log(error);
            }
          );
      }
    },
    async loadStructure({ commit }) {
      let sites, settings, colors, pages, blocks;

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

      await bxAjaxRunAction('colors', { data: { sid: sites[0].id } }).then(
        (c) => {
          colors = c;
        }
      );

      const structure = {
        sites,
      };

      // settings
      structure.sites[0].settings = settings;
      structure.sites[0].settings.id = 'settings';
      structure.sites[0].settings.name = 'Общие настройки';
      structure.sites[0].settings.text =
        'Используйте данный раздел, чтобы загрузить или отредактировать базовые элементы вашего сайта.';
      structure.sites[0].settings.icon = structure.sites[0].colors.icon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iSWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOCAtMTg4KSI+CiAgICA8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMyw4SDVBMi42NTIsMi42NTIsMCwwLDAsOCw1VjNBMi42NTIsMi42NTIsMCwwLDAsNSwwSDNBMi42NTIsMi42NTIsMCwwLDAsMCwzVjVBMi42NTIsMi42NTIsMCwwLDAsMyw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE5MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMTZhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggaWQ9IlZlY3Rvci0yIiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTMsOEg1QTIuNjUyLDIuNjUyLDAsMCwwLDgsNVYzQTIuNjUyLDIuNjUyLDAsMCwwLDUsMEgzQTIuNjUyLDIuNjUyLDAsMCwwLDAsM1Y1QTIuNjUyLDIuNjUyLDAsMCwwLDMsOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMiAxOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMwYTE2YWEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGlkPSJWZWN0b3ItMyIgZGF0YS1uYW1lPSJWZWN0b3IiIGQ9Ik0zLDhINUEyLjY1MiwyLjY1MiwwLDAsMCw4LDVWM0EyLjY1MiwyLjY1MiwwLDAsMCw1LDBIM0EyLjY1MiwyLjY1MiwwLDAsMCwwLDNWNUEyLjY1MiwyLjY1MiwwLDAsMCwzLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjIgMjAyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGExNmFhIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBpZD0iVmVjdG9yLTQiIGRhdGEtbmFtZT0iVmVjdG9yIiBkPSJNMyw4SDVBMi42NTIsMi42NTIsMCwwLDAsOCw1VjNBMi42NTIsMi42NTIsMCwwLDAsNSwwSDNBMi42NTIsMi42NTIsMCwwLDAsMCwzVjVBMi42NTIsMi42NTIsMCwwLDAsMyw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDIwMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMTZhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGcgaWQ9IlZlY3Rvci01IiBkYXRhLW5hbWU9IlZlY3RvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4IDE4OCkiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAiPgogICAgICA8cGF0aCBkPSJNMCwwSDI0VjI0SDBaIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHBhdGggZD0iTSAxIDEgTCAxIDIzIEwgMjMgMjMgTCAyMyAxIEwgMSAxIE0gMCAwIEwgMjQgMCBMIDI0IDI0IEwgMCAyNCBMIDAgMCBaIiBzdHJva2U9Im5vbmUiIGZpbGw9IiMwYTE2YWEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=';

      // colors
      structure.sites[0].colors = colors;
      structure.sites[0].colors.id = 'colors';
      structure.sites[0].colors.name = 'Цветовые настройки';
      structure.sites[0].colors.text =
        'Используйте данный раздел, чтобы настроить базовые цвета вашего сайта.';
      structure.sites[0].colors.icon =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iSWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwOCAtMTg4KSI+CiAgICA8cGF0aCBpZD0iVmVjdG9yIiBkPSJNMyw4SDVBMi42NTIsMi42NTIsMCwwLDAsOCw1VjNBMi42NTIsMi42NTIsMCwwLDAsNSwwSDNBMi42NTIsMi42NTIsMCwwLDAsMCwzVjVBMi42NTIsMi42NTIsMCwwLDAsMyw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDE5MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMTZhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPHBhdGggaWQ9IlZlY3Rvci0yIiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTMsOEg1QTIuNjUyLDIuNjUyLDAsMCwwLDgsNVYzQTIuNjUyLDIuNjUyLDAsMCwwLDUsMEgzQTIuNjUyLDIuNjUyLDAsMCwwLDAsM1Y1QTIuNjUyLDIuNjUyLDAsMCwwLDMsOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMiAxOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMwYTE2YWEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgIDxwYXRoIGlkPSJWZWN0b3ItMyIgZGF0YS1uYW1lPSJWZWN0b3IiIGQ9Ik0zLDhINUEyLjY1MiwyLjY1MiwwLDAsMCw4LDVWM0EyLjY1MiwyLjY1MiwwLDAsMCw1LDBIM0EyLjY1MiwyLjY1MiwwLDAsMCwwLDNWNUEyLjY1MiwyLjY1MiwwLDAsMCwzLDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjIgMjAyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGExNmFhIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICA8cGF0aCBpZD0iVmVjdG9yLTQiIGRhdGEtbmFtZT0iVmVjdG9yIiBkPSJNMyw4SDVBMi42NTIsMi42NTIsMCwwLDAsOCw1VjNBMi42NTIsMi42NTIsMCwwLDAsNSwwSDNBMi42NTIsMi42NTIsMCwwLDAsMCwzVjVBMi42NTIsMi42NTIsMCwwLDAsMyw4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEwIDIwMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBhMTZhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgPGcgaWQ9IlZlY3Rvci01IiBkYXRhLW5hbWU9IlZlY3RvciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA4IDE4OCkiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAiPgogICAgICA8cGF0aCBkPSJNMCwwSDI0VjI0SDBaIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHBhdGggZD0iTSAxIDEgTCAxIDIzIEwgMjMgMjMgTCAyMyAxIEwgMSAxIE0gMCAwIEwgMjQgMCBMIDI0IDI0IEwgMCAyNCBMIDAgMCBaIiBzdHJva2U9Im5vbmUiIGZpbGw9IiMwYTE2YWEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=';

      // pages
      structure.sites[0].pages = pages;
      structure.sites[0].pages[0].blocks = blocks;

      commit('setStructure', structure);
      commit('setPageActive', { pageId: 'settings' });

      function bxAjaxRunAction(type, payload) {
        return new Promise((res, rej) => {
          const BX = window.BX;

          if (BX) {
            commit('setPreloader', true);
            BX.ajax
              .runAction(`twinpx:seller.api.methods.${type}`, payload)
              .then(
                (r) => {
                  commit('setPreloader', false);
                  if (r.status === 'success' && r.data) {
                    res(r.data);
                  }
                },
                (error) => {
                  commit('setPreloader', false);
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
