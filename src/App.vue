<template>
  <div class="slr2-page-settings-grid" v-if="$store.state.structureLoaded">
    <the-left-menu></the-left-menu>
    <the-main-content></the-main-content>
    <alert-modal></alert-modal>
  </div>
</template>

<script>
import TheLeftMenu from './components/TheLeftMenu.vue';
import TheMainContent from './components/TheMainContent.vue';
import AlertModal from './components/AlertModal.vue';

export default {
  name: 'seller2PageSettings',
  components: {
    TheLeftMenu,
    TheMainContent,
    AlertModal,
  },
  async beforeMount() {},
  async created() {
    this.$store.dispatch('loadStructure', () => {
      this.$store.commit('setPageActive', { pageIndex: 0 });
    });
  },
};
</script>

<style>
:root {
  --slr2-background: #fcfcfc;
  --slr2-buttons: #0a16aa;
  --slr2-color: #000;
  --slr2-light: #f7f9ff;
  --slr2-font-size: 16px;
  --slr2-gap-big: 30px;
  --slr2-gap: 24px;
  --slr2-gap-middle: 16px;
  --slr2-padding: 16px;
}
#seller2PageSettings {
  background-color: #fff;
  padding: var(--slr2-padding);
}
#seller2PageSettings * {
  box-sizing: border-box;
}
.slr2-page-settings-grid {
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  gap: var(--slr2-gap-big);
  font-family: var(--ui-font-family-open-sans);
  color: var(--slr2-color);
}
</style>
