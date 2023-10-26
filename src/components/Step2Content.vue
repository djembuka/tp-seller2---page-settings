<template>
  <component
    :is="isEditedBlockComponent"
    :block="$store.getters.isEditedBlock"
  ></component>
</template>

<script>
import BlockSortable from './BlockSortable.vue';
import BlockStatic from './BlockStatic.vue';

export default {
  data() {
    return {};
  },
  computed: {
    isEditedBlockComponent() {
      const isEditedBlock = this.$store.getters.isEditedBlock;
      let type;
      if (isEditedBlock) {
        type = isEditedBlock.sort ? 'sortable' : 'static';
      }

      return `block-${type}`;
    },
  },
  components: {
    BlockSortable,
    BlockStatic,
  },
};
</script>
