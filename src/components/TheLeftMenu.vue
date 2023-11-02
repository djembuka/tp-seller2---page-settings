<template>
  <div class="slr2-page-settings__left-menu">
    <left-menu-item
      v-for="page in this.$store.state.data.pages"
      :page="page"
      :key="page.id"
    ></left-menu-item>
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
