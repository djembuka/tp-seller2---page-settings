<template>
  <div class="slr2-page-settings__left-menu">
    <left-menu-item
      v-for="page in this.$store.state.pages"
      :page="page"
      :key="page.id"
    ></left-menu-item>
    <div v-if="$store.getters.activePage">
      activePage: {{ $store.getters.activePage.name }}
    </div>
    <div v-if="$store.getters.isEditedBlock">
      isEditedBlock: {{ $store.getters.isEditedBlock.data.title }}
    </div>
    <pre>{{ $store.state.memory }}</pre>
  </div>
</template>

<script>
import LeftMenuItem from './LeftMenuItem.vue';

export default {
  components: {
    LeftMenuItem,
  },
};
</script>

<style>
.slr2-page-settings__left-menu {
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: var(--slr2-background);
  padding: 20px;
  font-weight: bold;
  font-size: var(--ui-font-size-md);
}
</style>
