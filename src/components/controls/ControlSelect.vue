<template>
  <div
    class="slr2-page-settings__control"
    :class="{
      'slr2-page-settings__control--active': active,
      'slr2-page-settings__control--invalid': invalid,
      'slr2-page-settings__control--disabled': disabled,
    }"
  >
    <div v-if="control.type === 'dropdown'">
      <img
        :src="disabled"
        class="slr2-page-settings__control__disabled-icon"
        v-if="disabled"
      />
      <div class="slr2-page-settings__label">{{ control.label }}</div>
      <v-select :options="control.options"></v-select>
    </div>
    <div v-else-if="control.type === 'radio'">
      <div class="slr2-page-settings__list-label">{{ control.label }}</div>
      <label
        class="slr2-page-settings__radio"
        v-for="radio in control.options"
        :key="radio.code"
      >
        <input
          class="with-gap"
          :name="control.id"
          type="radio"
          :value="radio.code"
        />
        <span>{{ radio.label }}</span>
      </label>
    </div>
    <div
      class="slr2-page-settings__control-hint"
      v-if="control.hint_external"
      v-html="control.hint_external"
    ></div>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

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
  components: {
    vSelect,
  },
};
</script>

<style>
:root {
  --vs-colors--lightest: rgba(60, 60, 60, 0.26);
  --vs-colors--light: rgba(60, 60, 60, 0.5);
  --vs-colors--dark: #333;
  --vs-colors--darkest: rgba(0, 0, 0, 0.15);

  /* Search Input */
  --vs-search-input-color: #2d3142;
  --vs-search-input-bg: #f5f7f8;
  --vs-search-input-placeholder-color: #2d3142;

  /* Font */
  --vs-font-size: 14px;
  --vs-line-height: 1.2;

  /* Disabled State */
  --vs-state-disabled-bg: #f5f7f8;
  --vs-state-disabled-color: #2d314255;
  --vs-state-disabled-controls-color: #2d314255;
  --vs-state-disabled-cursor: not-allowed;

  /* Borders */
  --vs-border-color: #f5f7f8;
  --vs-border-width: 1px;
  --vs-border-style: solid;
  --vs-border-radius: 3px;

  /* Actions: house the component controls */
  --vs-actions-padding: 4px 6px 0 3px;

  /* Component Controls: Clear, Open Indicator */
  --vs-controls-color: var(--vs-colors--light);
  --vs-controls-size: 1;
  --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

  /* Selected */
  --vs-selected-bg: #f5f7f8;
  --vs-selected-color: #2d3142;
  --vs-selected-border-color: var(--vs-border-color);
  --vs-selected-border-style: var(--vs-border-style);
  --vs-selected-border-width: var(--vs-border-width);

  /* Dropdown */
  --vs-dropdown-bg: #fff;
  --vs-dropdown-color: #2d3142;
  --vs-dropdown-z-index: 1000;
  --vs-dropdown-min-width: 160px;
  --vs-dropdown-max-height: 350px;
  --vs-dropdown-box-shadow: 0px 5px 10px #0000000f;

  /* Options */
  --vs-dropdown-option-bg: #fff;
  --vs-dropdown-option-color: #2d3142;
  --vs-dropdown-option-padding: 15px 20px;

  /* Active State */
  --vs-dropdown-option--active-bg: #eff5fd;
  --vs-dropdown-option--active-color: #3b3b3b;

  /* Deselect State */
  --vs-dropdown-option--deselect-bg: #fb5858;
  --vs-dropdown-option--deselect-color: #fff;

  /* Transitions */
  --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  --vs-transition-duration: 150ms;
}
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
  z-index: 10;
}
.slr2-page-settings__control--invalid .slr2-page-settings__label {
  color: #ff0000;
}
.slr2-page-settings__control--disabled .slr2-page-settings__label {
  color: #2d3142;
  opacity: 0.3;
}

.slr2-page-settings__control .vs__search {
  height: 48px;
  margin-top: 0;
}
.slr2-page-settings__control .vs__dropdown-toggle {
  padding-bottom: 0;
}
.slr2-page-settings__control .vs__selected-options {
}
.slr2-page-settings__control .vs__search::placeholder,
.slr2-page-settings__control .vs__dropdown-toggle {
  background: #f5f7f8;
  border: none;
  color: #2d3142;
}

.slr2-page-settings__control .vs__clear,
.slr2-page-settings__control .vs__open-indicator {
  fill: #2d3142;
}

.slr2-page-settings__control-hint {
  color: #2d3142;
  font-size: 9px;
  margin: 8px 0 0 14px;
  line-height: 1.2;
}

/*Radio*/
.slr2-page-settings__radio {
  display: block;
  margin-bottom: 16px;
}
.slr2-page-settings__list-label {
  font-size: 18px;
  font-family: 'Open Sans', Arial, sans-serif;
  font-weight: bold;
  color: #000000;
  margin-bottom: 16px;
}
[type='radio']:not(:checked),
[type='radio']:checked {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

[type='radio']:not(:checked) + span,
[type='radio']:checked + span {
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 20px;
  line-height: 16px;
  font-size: 14px;
  -webkit-transition: 0.28s ease;
  transition: 0.28s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

[type='radio'] + span:before,
[type='radio'] + span:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  z-index: 0;
  -webkit-transition: 0.28s ease;
  transition: 0.28s ease;
}

[type='radio']:not(:checked) + span:before,
[type='radio']:not(:checked) + span:after,
[type='radio']:checked + span:before,
[type='radio']:checked + span:after,
[type='radio'].with-gap:checked + span:before,
[type='radio'].with-gap:checked + span:after {
  border-radius: 50%;
}

[type='radio']:not(:checked) + span:before,
[type='radio']:not(:checked) + span:after {
  border: 2px solid #f5f7f8;
  background-color: #f5f7f8;
}

[type='radio']:not(:checked):hover + span:before {
  border-color: #d7dee1;
  background-color: #d7dee1;
}

[type='radio']:not(:checked) + span:after {
  -webkit-transform: scale(0);
  transform: scale(0);
}

[type='radio']:checked + span:before {
  border: 2px solid transparent;
}

[type='radio']:checked + span:after,
[type='radio'].with-gap:checked + span:before {
  border: 2px solid #d7dee1;
  background-color: #d7dee1;
}

[type='radio']:checked + span:after,
[type='radio'].with-gap:checked + span:after {
  border: 2px solid #707070;
  background-color: #2d3142;
}

[type='radio']:checked + span:after {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
}

[type='radio'].with-gap:checked + span:after {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
}

[type='radio'].with-gap:disabled:checked + span:before {
  border: 2px solid rgba(0, 0, 0, 0.42);
}

[type='radio'].with-gap:disabled:checked + span:after {
  border: none;
  background-color: rgba(0, 0, 0, 0.42);
}

[type='radio']:disabled:not(:checked) + span:before,
[type='radio']:disabled:checked + span:before {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.42);
}

[type='radio']:disabled + span {
  color: rgba(0, 0, 0, 0.42);
}

[type='radio']:disabled:not(:checked) + span:before {
  border-color: rgba(0, 0, 0, 0.42);
}

[type='radio']:disabled:checked + span:after {
  background-color: rgba(0, 0, 0, 0.42);
  border-color: #949494;
}
</style>
