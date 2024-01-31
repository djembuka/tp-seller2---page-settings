<template>
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
    <div
      class="slr2-page-settings__control-textarea"
      contenteditable="true"
      ref="textarea"
      @focus="focus"
      @blur="blur"
      @input="input"
      v-html="value"
    ></div>
    <div
      class="slr2-page-settings__control-hint"
      v-html="control.hint_external"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.control.name,
      active: this.control.value.trim() !== '',
      value: this.control.value,
      val: this.control.value,
      invalid: false,
      disabled: this.control.disabled,
    };
  },
  props: ['control', 'variantId'],
  methods: {
    focus() {
      this.active = true;
    },
    blur() {
      this.active = this.val.trim() !== '';
    },
    input() {
      this.val = this.$refs.textarea.innerHTML;

      this.$store.commit('setControlValue', {
        blockId: this.$store.getters.isEditedBlock.id,
        variantId: this.variantId,
        controlId: this.control.id,
        value: this.val,
      });
    },
  },
};
</script>

<style scoped>
.slr2-page-settings__control {
  position: relative;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__control--active .slr2-page-settings__label {
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
  font-size: 9px;
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
  line-height: 1.1;
}
.slr2-page-settings__control--invalid .slr2-page-settings__label {
  color: #ff0000;
}
.slr2-page-settings__control--disabled .slr2-page-settings__label {
  color: #2d3142;
  opacity: 0.3;
}
.slr2-page-settings__control-textarea {
  display: block !important;
  width: 100%;
  margin: 0 !important;
  padding: 14px !important;
  background-color: #f5f7f8;
  border: 1px solid #f5f7f8 !important;
  border-radius: 3px;
  height: 108px !important;
  border-radius: 3px !important;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px !important;
  -webkit-transition: border-color 0.3s ease;
  transition: border-color 0.3s ease;
  outline: none !important;
  box-shadow: none !important;
}
div.slr2-page-settings__control-textarea {
  overflow: auto;
}
.slr2-page-settings__control-textarea:focus,
.slr2-page-settings__control-textarea:hover {
  outline: none;
  border-color: #2d3142 !important;
}
.slr2-page-settings__control--invalid .slr2-page-settings__control-textarea {
  background-color: #fff5f5;
  border-color: #e38080 !important;
  outline: none;
  color: #ff0000;
}
.slr2-page-settings__control--disabled .slr2-page-settings__control-textarea {
  color: #00000055;
  pointer-events: none;
  background-color: #f5f7f855;
  border: 1px solid #f5f7f855 !important;
}
.slr2-page-settings__control-hint {
  color: #2d3142;
  font-size: 9px;
  margin: 8px 0 0 14px;
  line-height: 1.2;
}
</style>
