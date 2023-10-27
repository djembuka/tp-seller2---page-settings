<template>
  <div
    class="slr2-page-settings__template"
    :class="{ 'slr2-page-settings__template--checked': checked }"
    @click.prevent="click"
  >
    <control-radio></control-radio>
    <div class="slr2-page-settings__template__title">{{ template.title }}</div>
    <img :src="template.img" class="slr2-page-settings__template__img" />
    <div class="slr2-page-settings__template__edit">
      <span>{{ template.edit }}</span>
    </div>
  </div>
</template>

<script>
import ControlRadio from './ControlRadio.vue';

export default {
  data() {
    return {
      checked: false,
    };
  },
  props: ['template'],
  methods: {
    click() {
      this.checked = true;
    },
  },
  components: {
    ControlRadio,
  },
};
</script>

<style>
.slr2-page-settings__template {
  position: relative;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: var(--slr2-padding);
  margin-bottom: var(--slr2-padding);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
}
.slr2-page-settings__template:hover {
  border-color: #fff;
  box-shadow: 0px 3px 6px #353cb11a;
}
.slr2-page-settings__template--checked {
  border-color: #f7f9ff;
  background-color: #f7f9ff;
}
.slr2-page-settings__template--checked:hover {
  border-color: #f7f9ff;
  box-shadow: none;
}
.slr2-page-settings__template__title {
  font-size: var(--ui-font-size-md);
  font-weight: bold;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__template__img {
  display: block;
  width: 100%;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__template__edit span {
  font-size: 12px;
  color: #353cb1;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__template__edit span:hover {
  opacity: 0.7;
}
.slr2-page-settings__template .slr2-page-settings__radio {
  position: absolute;
  top: 18px;
  right: 18px;
}
</style>
