<template>
  <div class="slr2-page-settings__control">
    <div class="slr2-page-settings__multiselect">
      <div
        class="slr2-page-settings__multiselect-item"
        :class="{
          'slr2-page-settings__multiselect-item--checked': isChecked(item),
        }"
        v-for="item in control.options"
        :value="item.code"
        :key="item.code"
        @click="click(item)"
      >
        {{ item.label }}
      </div>
    </div>
    <div
      class="slr2-page-settings__control-hint"
      v-if="control.hint_external"
      v-html="control.hint_external"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['control', 'variantId'],
  methods: {
    isChecked(item) {
      return this.control.value.find((v) => v === item.code);
    },
    click(item) {
      let checked = false;
      if (this.isChecked(item)) {
        checked = true;
      }
      this.$store.commit('setControlValue', {
        blockId: this.$store.getters.isEditedBlock.id,
        variantId: this.variantId,
        controlId: this.control.id,
        value: item.code,
        checked,
      });
    },
  },
};
</script>

<style>
.slr2-page-settings__control {
  position: relative;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__control-hint {
  color: #2d3142;
  font-size: 9px;
  margin: 8px 0 0 14px;
  line-height: 1.2;
}
.slr2-page-settings__multiselect-item {
  height: 36px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-family: 'Open Sans', Arial, sans-serif;
  color: #2d3142;
  padding: 0 24px;
  background-color: #f5f7f8;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  margin: 0 16px 16px 0;
}
.slr2-page-settings__multiselect-item:hover {
  background-color: #d7dee1;
}
.slr2-page-settings__multiselect-item.slr2-page-settings__multiselect-item--checked {
  background-color: #2d3142;
  color: #fff;
  font-weight: bold;
}
</style>
