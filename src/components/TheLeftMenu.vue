<template>
  <div class="slr2-page-settings__left-menu">
    <left-menu-item
      v-for="page in this.$store.state.data.pages"
      :page="page"
      :key="page.id"
    ></left-menu-item>
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
  font-weight: bold;
  font-size: var(--ui-font-size-md);
}
</style>
