<template>
  <div
    v-if="this.$store.getters.activePage.blocks"
    class="slr2-page-settings__blocks-grid"
  >
    <div
      v-for="block in this.$store.getters.activePage.blocks.top"
      :key="block.id"
      class="slr2-page-settings__blocks-grid"
    >
      <block-static :block="block"></block-static>
    </div>

    <container-sortable></container-sortable>

    <div
      v-for="block in this.$store.getters.activePage.blocks.bottom"
      :key="block.id"
      class="slr2-page-settings__blocks-grid"
    >
      <block-static :block="block"></block-static>
    </div>
  </div>
</template>

<script>
import BlockStatic from './BlockStatic.vue';
import ContainerSortable from './ContainerSortable.vue';

export default {
  components: {
    BlockStatic,
    ContainerSortable,
  },
};
</script>

<style>
.slr2-page-settings__blocks-grid {
  display: grid;
  grid-auto-rows: auto;
  row-gap: var(--slr2-gap);
}
</style>
