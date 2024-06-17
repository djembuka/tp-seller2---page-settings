<template>
  <div class="slr2-page-settings__content">
    <component :is="currentStepComponent" :stepData="stepData"></component>
    <the-buttons v-if="memory"></the-buttons>
    <the-preloader></the-preloader>
  </div>
</template>

<script>
import Step1Content from './Step1Content.vue';
import Step2Content from './Step2Content.vue';
import Step3Content from './Step3Content.vue';
import TheButtons from './TheButtons.vue';
import ThePreloader from './ThePreloader.vue';

export default {
  data() {
    return {};
  },
  computed: {
    currentStepComponent() {
      return `${this.$store.state.step}Content`;
    },
    stepData() {
      let result;
      switch (this.$store.state.step) {
        case 'step1':
          //only for pages
          result = { page: this.$store.getters.activePage };
          break;
        case 'step2':
          //for colors and pages
          if (this.$store.getters.activePage.id === 'colors') {
            result = { block: this.$store.state.data.sites[0].colors };
          } else {
            result = { block: this.$store.getters.isEditedBlock };
          }
          break;
        case 'step3':
          //for settings, colors and pages
          if (this.$store.getters.activePage.id === 'settings') {
            result = { variant: this.$store.state.data.sites[0].settings };
          } else if (this.$store.getters.activePage.id === 'colors') {
            result = {
              variant: this.$store.getters.activePage.variants.find(
                (v) =>
                  v.id === this.$store.state.data.sites[0].colors.activeVariant
              ),
            };
          } else {
            result = {
              variant: this.$store.getters.isEditedBlock.variants.find(
                (v) => v.id === this.$store.getters.isEditedBlock.activeVariant
              ),
            };
          }
          break;
      }
      return result;
    },
    memory() {
      return this.$store.state.memory;
    },
  },
  components: {
    Step1Content,
    Step2Content,
    Step3Content,
    TheButtons,
    ThePreloader,
  },
};
</script>

<style>
.slr2-page-settings__content {
  position: relative;
  background-color: var(--slr2-background);
  padding: var(--ui-space-inset-xl);
  display: grid;
  grid-auto-rows: min-content;
  row-gap: var(--slr2-gap);
}
.slr2-page-settings__content > div {
  width: 100%;
  overflow: hidden;
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
