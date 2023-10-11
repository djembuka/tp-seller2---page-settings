<template>
  <div class="slr2-page-settings-grid">
    <the-left-menu></the-left-menu>
    <the-main-content :page="this.$store.getters.activePage"></the-main-content>
    <the-buttons></the-buttons>
  </div>
</template>

<script>
import TheLeftMenu from './components/TheLeftMenu.vue';
import TheMainContent from './components/TheMainContent.vue';
import TheButtons from './components/TheButtons.vue';

export default {
  name: 'seller2PageSettings',
  components: {
    TheLeftMenu,
    TheMainContent,
    TheButtons,
  },
  created() {
    this.$store.commit('setPageActive', { pageIndex: 0 });
    this.$store.commit('sortBlocks');
  },
};
</script>

<style>
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
