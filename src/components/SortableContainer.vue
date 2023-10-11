<template>
  <div class="slr2-page-settings__sortable" ref="sortable">
    <block-sortable
      v-for="block in page.pageStructure.blocks"
      :block="block"
      :key="block.blockId"
    ></block-sortable>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
import BlockSortable from './BlockSortable.vue';

export default {
  data() {
    return {};
  },
  props: ['page'],
  components: {
    BlockSortable,
  },
  mounted() {
    //https://github.com/SortableJS/Sortable
    const sortableDiv = this.$refs.sortable;
    const commit = this.$store.commit;
    const pageId = this.page.pageId;

    Sortable.create(sortableDiv, {
      onSort() {
        sortableDiv
          .querySelectorAll('.slr2-page-settings__block')
          .forEach((block, index) => {
            const blockId = block.getAttribute('data-blockid');
            commit('setSort', {
              pageId,
              blockId,
              sort: (index + 1) * 10,
            });
          });
      },
    });
  },
};
</script>

<style>
.slr2-page-settings__sortable {
  display: grid;
  grid-auto-rows: auto;
  row-gap: var(--slr2-gap);
}
</style>
