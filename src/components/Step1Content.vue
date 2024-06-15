<template>
  <div v-if="stepData.page.blocks" class="slr2-page-settings__blocks-grid">
    <div
      v-for="block in stepData.page.blocks.top"
      :key="block.id"
      class="slr2-page-settings__blocks-grid"
    >
      <block-static :block="block"></block-static>
    </div>

    <container-sortable
      :blocks="stepData.page.blocks.other"
    ></container-sortable>

    <div
      v-for="block in stepData.page.blocks.bottom"
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
  props: ['stepData'],
  components: {
    BlockStatic,
    ContainerSortable,
  },
  mounted() {
    if (this.$store.getters.isEditedBlock) {
      this.$store.dispatch('setBlockIsEdited', {
        pageId: this.$store.getters.activePage.id,
        blockId: this.$store.getters.isEditedBlock.id,
        isEdited: false,
      });
    }
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
