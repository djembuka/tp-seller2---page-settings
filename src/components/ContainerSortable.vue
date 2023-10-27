<template>
  <div id="seller2PageSettingsContainerSortable">
    <div v-if="render">
      <div class="slr2-page-settings__sortable" ref="sortable">
        <block-sortable
          v-for="block in this.$store.getters.activePage.pageBlocks"
          :block="block"
          :key="block.blockId"
        ></block-sortable>
      </div>
    </div>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
import BlockSortable from './BlockSortable.vue';

export default {
  data() {
    return {
      render: true,
    };
  },
  methods: {
    async forceRender() {
      this.render = false;
      await this.$nextTick();
      this.render = true;
      await this.$nextTick();
      this.setSortable();
    },
    setSortable() {
      //https://github.com/SortableJS/Sortable
      const sortableDiv = this.$refs.sortable;
      const commit = this.$store.commit;

      Sortable.create(sortableDiv, {
        onSort() {
          sortableDiv
            .querySelectorAll('.slr2-page-settings__block')
            .forEach((block, index) => {
              const blockId = block.getAttribute('data-blockid');
              commit('setSort', {
                blockId,
                sort: (index + 1) * 10,
              });
            });
          commit('sortBlocks');
        },
      });
    },
  },
  components: {
    BlockSortable,
  },
  mounted() {
    this.setSortable();
    //event
    document
      .getElementById('seller2PageSettingsContainerSortable')
      .addEventListener(
        'seller2ForceBlocksRender',
        () => {
          this.forceRender();
        },
        false
      );
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
