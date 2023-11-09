<template>
  <div class="slr2-page-settings__content">
    <component :is="currentStepComponent"></component>
    <the-buttons></the-buttons>
  </div>
</template>

<script>
import Step1Content from './Step1Content.vue';
import Step2Content from './Step2Content.vue';
import Step3Content from './Step3Content.vue';
import TheButtons from './TheButtons.vue';

export default {
  data() {
    return {};
  },
  computed: {
    currentStepComponent() {
      return `${this.$store.state.step}Content`;
    },
  },
  components: {
    Step1Content,
    Step2Content,
    Step3Content,
    TheButtons,
  },
};
</script>

<style>
.slr2-page-settings__content {
  background-color: var(--slr2-background);
  padding: var(--ui-space-inset-xl);
  display: grid;
  grid-auto-rows: min-content;
  row-gap: var(--slr2-gap);
}
.slr2-page-settings__block {
  background-color: #fff;
  min-height: 96px;
  padding: var(--slr2-padding) var(--slr2-padding) var(--slr2-gap);
  position: relative;
  border-radius: 8px;
  -webkit-transition: box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
}
.slr2-page-settings__block:hover {
  box-shadow: 0px 3px 6px #353cb11a;
}
.slr2-page-settings__block__icon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10;
}
.slr2-page-settings__block__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}
.slr2-page-settings__block__description {
  font-size: 14px;
  margin-bottom: 16px;
}
.slr2-page-settings__block__edit span {
  font-size: 12px;
  color: #353cb1;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__block__edit span:hover {
  opacity: 0.7;
}
</style>
