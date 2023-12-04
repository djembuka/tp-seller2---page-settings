<template>
  <div
    class="slr2-page-settings__control"
    :class="{
      'slr2-page-settings__control--active': active,
      'slr2-page-settings__control--invalid': invalid,
      'slr2-page-settings__control--disabled': disabled,
    }"
  >
    <div class="slr2-page-settings__control__disabled-icon" v-if="disabled">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          d="M0,5.333V4C0,1.793.667,0,4,0S8,1.793,8,4V5.333"
          transform="translate(4 1.333)"
          fill="none"
          stroke="#2d3142"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          d="M3.333,1.667A1.667,1.667,0,1,1,1.667,0,1.667,1.667,0,0,1,3.333,1.667Z"
          transform="translate(6.333 9)"
          fill="none"
          stroke="#2d3142"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          d="M10,8H3.333C.667,8,0,7.333,0,4.667V3.333C0,.667.667,0,3.333,0H10c2.667,0,3.333.667,3.333,3.333V4.667C13.333,7.333,12.667,8,10,8Z"
          transform="translate(1.333 6.667)"
          fill="none"
          stroke="#2d3142"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <g transform="translate(16 16) rotate(180)" fill="none" opacity="0">
          <path d="M0,0H16V16H0Z" stroke="none" />
          <path
            d="M 1 1 L 1 15 L 15 15 L 15 1 L 1 1 M 0 0 L 16 0 L 16 16 L 0 16 L 0 0 Z"
            stroke="none"
            fill="#2d3142"
          />
        </g>
      </svg>
    </div>

    <div class="slr2-page-settings__label">{{ control.label }}</div>
    <datepicker @opened="opened"></datepicker>
    <div
      class="slr2-page-settings__control-hint"
      v-html="control.hint_external"
    ></div>
  </div>
</template>

<script>
import Datepicker from 'vuejs3-datepicker';

export default {
  data() {
    return {
      name: this.control.name,
      active: false,
      value: this.control.value,
      invalid: false,
      disabled: this.control.disabled,
    };
  },
  props: ['control'],
  methods: {
    opened() {
      console.log('opened');
    },
  },
  components: {
    Datepicker,
  },
};
</script>

<style>
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
  right: 47px;
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
.slr2-page-settings__control-hint {
  color: #2d3142;
  font-size: 9px;
  margin: 8px 0 0 14px;
  line-height: 1.2;
}

/*Datepicker*/
.vuejs3-datepicker {
  display: block;
}
.vuejs3-datepicker #calendar-div {
  background-color: transparent;
  border-radius: 3px;
}
.vuejs3-datepicker__value {
  border: 1px solid #f5f7f8;
  background-color: #f5f7f8;
  border-radius: 3px;
  padding: 0 14px;
  height: 48px;
  display: flex;
  align-items: center;
  -webkit-transition: border-color 0.3s ease;
  transition: border-color 0.3s ease;
}
.vuejs3-datepicker:hover .vuejs3-datepicker__value {
  border-color: #2a4d7f;
}
.slr2-page-settings__control--invalid .vuejs3-datepicker__value {
  background-color: #ffeeef;
  border-color: #e38080;
}
.slr2-page-settings__control--invalid
  .vuejs3-datepicker:hover
  .vuejs3-datepicker__value {
  border-color: #e38080;
}
.slr2-page-settings__control--disabled .vuejs3-datepicker__value {
  background-color: #f5f7f8;
  border-color: #f5f7f8;
  pointer-events: nones;
}
.slr2-page-settings__control--disabled .vuejs3-datepicker {
  pointer-events: none;
}
.slr2-page-settings__control--disabled .vuejs3-datepicker__icon {
  opacity: 0.3;
}
.vuejs3-datepicker__icon {
  position: absolute;
  top: 50%;
  right: 16px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 10;
}
.vuejs3-datepicker__content {
  margin-left: 0;
}
</style>
