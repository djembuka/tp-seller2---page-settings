<template>
  <div
    class="slr2-page-settings__control"
    :class="{
      'slr2-page-settings__control--invalid': invalid,
      'slr2-page-settings__control--disabled': disabled,
    }"
  >
    <div v-if="control.type === 'checkbox'">
      <label class="slr2-page-settings__checkbox">
        <input
          type="checkbox"
          class="filled-in"
          :name="control.id"
          :value="control.value"
          v-model="checked"
          @change="change"
        />
        <span>{{ control.label }}</span>
      </label>
    </div>
    <div v-else-if="control.type === 'switch'">
      <div class="slr2-page-settings__list-label">{{ control.label }}</div>
      <control-switcher></control-switcher>
    </div>
    <div
      class="slr2-page-settings__control-hint"
      v-if="control.hint_external"
      v-html="control.hint_external"
    ></div>
  </div>
</template>

<script>
import ControlSwitcher from './ControlSwitcher.vue';

export default {
  data() {
    return {
      invalid: false,
      checked: this.control.checked,
      disabled: this.control.disabled,
    };
  },
  props: ['control', 'variantId'],
  methods: {
    change() {
      this.$store.commit('setControlValue', {
        blockId: this.$store.getters.isEditedBlock.id,
        variantId: this.variantId,
        controlId: this.control.id,
        checked: this.checked,
      });
    },
  },
  components: {
    ControlSwitcher,
  },
};
</script>

<style>
.slr2-page-settings__control {
  position: relative;
  margin-bottom: var(--slr2-gap-middle);
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
.slr2-page-settings__control-hint {
  color: #2d3142;
  font-size: 9px;
  margin: 8px 0 0 14px;
  line-height: 1.2;
}

/*Checkbox*/
.slr2-page-settings__checkbox {
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
[type='checkbox']:not(:checked),
[type='checkbox']:checked {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

[type='checkbox'] + span {
  position: relative;
  padding-left: 40px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  line-height: 16px;
  font-size: 14px;
  -webkit-user-select: none;
  user-select: none;
}

[type='checkbox'] + span:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  z-index: 0;
  border: 2px solid #5a5a5a;
  border-radius: 1px;
  margin-top: 3px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

[type='checkbox']:not(:checked):disabled + span:before {
  border: none;
  background-color: rgba(0, 0, 0, 0.42);
}

[type='checkbox']:checked + span:before {
  top: -4px;
  left: -5px;
  width: 12px;
  height: 22px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #26a69a;
  border-bottom: 2px solid #26a69a;
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

[type='checkbox']:checked:disabled + span:before {
  border-right: 2px solid rgba(0, 0, 0, 0.42);
  border-bottom: 2px solid rgba(0, 0, 0, 0.42);
}

[type='checkbox'].filled-in + span:before {
  z-index: 11;
}
[type='checkbox'].filled-in + span:after {
  border-radius: 8px;
  height: 24px;
  width: 24px;
  z-index: 10;
}

[type='checkbox'].filled-in + span:before,
[type='checkbox'].filled-in + span:after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0;
  -webkit-transition: background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s,
    top 0.2s 0.1s, left 0.2s 0.1s;
  transition: background-color 0.25s, width 0.2s 0.1s, height 0.2s 0.1s,
    top 0.2s 0.1s, left 0.2s 0.1s;
}

[type='checkbox'].filled-in:not(:checked) + span:before {
  top: 12px;
  left: 8px;
  width: 0;
  height: 0;
  border: 3px solid transparent;
  -webkit-transform: rotateZ(37deg);
  transform: rotateZ(37deg);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

[type='checkbox'].filled-in:not(:checked) + span:after {
  background-color: transparent;
  background-color: #f5f7f8;
}
[type='checkbox'].filled-in:not(:checked):hover + span:after {
  background-color: #d7dee1;
}

[type='checkbox'].filled-in:checked + span:before {
  top: 2px;
  left: 3px;
  width: 5px;
  height: 8px;
  border-top: 2px solid transparent;
  border-left: 2px solid transparent;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  -webkit-transform: rotateZ(37deg);
  transform: rotateZ(37deg);
  -webkit-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

[type='checkbox'].filled-in:checked + span:after {
  background-color: #2d3142;
}

[type='checkbox'].filled-in:disabled:not(:checked) + span:before {
  background-color: transparent;
  border: 2px solid transparent;
}

[type='checkbox'].filled-in:disabled:not(:checked) + span:after {
  border-color: transparent;
  background-color: #949494;
}

[type='checkbox'].filled-in:disabled:checked + span:before {
  background-color: transparent;
}

[type='checkbox'].filled-in:disabled:checked + span:after {
  background-color: #949494;
  border-color: #949494;
}
</style>
