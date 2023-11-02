<template>
  {{ control.value }}, {{ value }}
  <div
    class="slr2-page-settings__control"
    :class="{
      'slr2-page-settings__control--active': active,
      'slr2-page-settings__control--invalid': invalid,
      'slr2-page-settings__control--disabled': disabled,
    }"
  >
    <img
      :src="disabled"
      class="slr2-page-settings__control__disabled-icon"
      v-if="disabled"
    />
    <div class="slr2-page-settings__label">{{ control.label }}</div>
    <input
      type="text"
      :name="name"
      v-model="value"
      @focus="focus"
      @blur="blur"
      @input="input"
      :disabled="disabled"
      class="slr2-page-settings__control-text"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.control.name,
      active: this.control.value.trim() !== '',
      value: this.control.value,
      invalid: false,
      disabled: this.control.disabled,
    };
  },
  props: ['control', 'controlIndex', 'templateId'],
  methods: {
    focus() {
      this.active = true;
    },
    blur() {
      this.active = this.control.value.trim() !== '';
    },
    input() {
      this.$store.commit('setControlValue', {
        blockId: this.$store.getters.isEditedBlock.id,
        templateId: this.templateId,
        controlIndex: this.controlIndex,
        value: this.value,
      });
    },
  },
};
</script>

<style>
.slr2-page-settings__control {
  margin-bottom: var(--slr2-gap-middle);
  position: relative;
}
.slr2-page-settings__control--active .slr2-page-settings__label {
  -webkit-transform: translateY(3px);
  transform: translateY(3px);
  font-size: 11px;
  color: #848c95;
}
.slr2-page-settings__control__disabled-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  pointer-events: none;
  z-index: 10;
}
.slr2-page-settings__label {
  position: absolute;
  top: 0;
  left: 14px;
  margin: 0;
  padding: 0;
  color: #2d3142;
  font-size: 14px;
  -webkit-transition: -webkit-transform 0.2s ease-out,
    -webkit-font-size 0.2s ease-out;
  transition: transform 0.2s ease-out, font-size 0.2s ease-out;
  -webkit-transform: translateY(14px);
  transform: translateY(14px);
  pointer-events: none;
}
.slr2-page-settings__control--invalid .slr2-page-settings__label {
  color: #ff0000;
}
.slr2-page-settings__control--disabled .slr2-page-settings__label {
  color: #2d3142;
  opacity: 0.3;
}
.slr2-page-settings__control-text {
  display: block !important;
  width: 100%;
  margin: 0 !important;
  padding: 0 14px !important;
  background-color: #f5f7f8;
  border: 1px solid #f5f7f8 !important;
  border-radius: 3px;
  height: 48px !important;
  line-height: 48px;
  border-radius: 3px !important;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px !important;
  -webkit-transition: border-color 0.3s ease;
  transition: border-color 0.3s ease;
  outline: none !important;
  box-shadow: none !important;
}
.slr2-page-settings__control-text:focus,
.slr2-page-settings__control-text:hover {
  outline: none;
  border-color: #2d3142 !important;
}
.slr2-page-settings__control--invalid .slr2-page-settings__control-text {
  background-color: #fff5f5;
  border-color: #e38080 !important;
  outline: none;
  color: #ff0000;
}
.slr2-page-settings__control--disabled .slr2-page-settings__control-text {
  color: #00000055;
  pointer-events: none;
}
</style>
