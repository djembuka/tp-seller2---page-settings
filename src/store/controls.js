export default {
  mutations: {
    changeControlValue(_, { control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
        case 'select':
          if (value !== undefined) {
            control.value = value;
          }
          break;
        case 'checkbox':
          if (checked !== undefined) {
            control.checked = checked;
          }
          break;
        case 'multiselect':
          if (value !== undefined && checked !== undefined) {
            if (checked === false) {
              const index = control.value.indexOf(value);
              if (index >= 0) {
                control.value.splice(index, 1);
              }
            } else {
              control.value.push(value);
            }
          }
          break;
      }
    },
    changeControlMemory(_, { control, value }) {
      if (value !== undefined) {
        control.memory = value;
      } else if (control.memory) {
        delete control.memory;
      }
    },
    validateControl(_, control) {
      control.validateWatcher = !control.validateWatcher;
    },
    focusControl(_, control) {
      control.focusWatcher = !control.focusWatcher;
    },
    disableControl(_, { control, value }) {
      control.disabled = value;
    },
    changeDependentControls(_, { block, control }) {
      let variant, dependentArray;

      variant = block.variants.find((v) => v.id === block.activeVariant);

      if (variant) {
        dependentArray = variant.settings.properties.filter(
          (p) => p.dependency === control.id
        );
      }

      if (dependentArray) {
        dependentArray.forEach((c) => {
          c.disabled = !control.checked;
        });
      }
    },
  },
  actions: {
    setControlValuesFromMemory({ rootState, commit }, { blockId, variantId }) {
      let block, variant;
      rootState.data.sites[0].pages.forEach((page) => {
        if (page.blocks) {
          ['top', 'other', 'bottom'].forEach((type) => {
            block =
              page.blocks[type].find((block) => block.id === blockId) || block;
          });
        }
      });

      if (block) {
        variant = block.variants.find((v) => v.id === variantId);
      }

      if (variant) {
        variant.settings.properties.forEach((p) => {
          if (p.memory) {
            switch (p.property) {
              case 'text':
                commit('changeControlValue', { control: p, value: p.memory });
                break;
            }
          }
        });
      }
    },
    changeControlValue({ getters, commit }, { control, value, checked }) {
      switch (control.property) {
        case 'text':
        case 'textarea':
          if (!control.memory) {
            commit('changeControlMemory', { control, value: control.value });
          }

          commit('changeControlValue', { control, value });
          break;
        case 'checkbox':
          if (!control.memory) {
            commit('changeControlMemory', {
              control,
              checked: control.checked,
            });
          }

          commit('changeControlValue', { control, checked });

          commit('changeDependentControls', {
            block: getters.isEditedBlock,
            control,
          });
          break;
        case 'multiselect':
          if (!control.memory) {
            commit('changeControlMemory', {
              control,
              value: control.value,
              checked: control.checked,
            });
          }

          commit('changeControlValue', { control, value, checked });
          break;
        case 'select':
          if (!control.memory) {
            commit('changeControlMemory', { control, value: control.value });
          }

          commit('changeControlValue', { control, value });
          break;
      }
    },
    validateControl({ commit }, { control }) {
      commit('validateControl', control);
    },
    focusControl({ commit }, { control }) {
      commit('focusControl', control);
    },
    disableControl({ commit }, { control, value }) {
      commit('disableControl', { control, value });
    },
    setControlValue(
      { rootState },
      { blockId, variantId, controlId, value, checked }
    ) {
      let block;
      const page = rootState.data.sites[0].pages.find((page) => page.active);

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

      switch (control.property) {
        case 'text':
        case 'textarea':
        case 'select':
          if (value) {
            control.value = value;
          }
          break;
        case 'checkbox':
          if (checked) {
            control.checked = checked;
          }
          break;
        case 'multiselect':
          if (value !== undefined && checked !== undefined) {
            if (checked) {
              const index = control.value.indexOf(value);
              if (index >= 0) {
                control.value.splice(index, 1);
              }
            } else {
              control.value.push(value);
            }
          }
          break;
      }
    },
  },
};
