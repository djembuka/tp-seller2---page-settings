<template>
  <div
    v-for="block in this.$store.getters.activePage.blocks.top"
    :key="block.id"
  >
    <block-static :block="block"></block-static>
  </div>
  <container-sortable></container-sortable>

  <div
    v-for="block in this.$store.getters.activePage.blocks.bottom"
    :key="block.id"
  >
    <block-static :block="block"></block-static>
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
