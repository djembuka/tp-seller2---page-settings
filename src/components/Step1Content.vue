<template>
  <block-static :block="$store.state.data.scaffold.header"></block-static>
  <container-sortable></container-sortable>
  <block-static :block="$store.state.data.scaffold.footer"></block-static>
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
