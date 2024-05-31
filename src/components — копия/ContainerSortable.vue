<template>
  <div id="seller2PageSettingsContainerSortable">
    <div v-if="render">
      <div
        class="slr2-page-settings__sortable"
        id="seller2PageSettingsSortable"
      >
        <block-sortable
          v-for="block in this.$store.getters.activePage.blocks.other"
          :block="block"
          :key="block.id"
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
      const sortableDiv = document.getElementById(
        'seller2PageSettingsSortable'
      );
      const store = this.$store;

      Sortable.create(sortableDiv, {
        onSort() {
          let array = [];
          sortableDiv
            .querySelectorAll('.slr2-page-settings__block')
            .forEach((block) => {
              array.push(block.getAttribute('data-id'));
            });
          store.dispatch('rememberBlocksOrder', array);
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
