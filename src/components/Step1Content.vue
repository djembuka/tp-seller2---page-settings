<template>
  <block-static :block="$store.state.scaffold.header"></block-static>
  <sortable-container></sortable-container>
  <block-static :block="$store.state.scaffold.footer"></block-static>
</template>

<script>
import BlockStatic from './BlockStatic.vue';
import SortableContainer from './SortableContainer.vue';

export default {
  components: {
    BlockStatic,
    SortableContainer,
  },
};
</script>
