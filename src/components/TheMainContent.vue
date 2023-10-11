<template>
  <div class="slr2-page-settings__content">
    <block-static :block="page.pageStructure.header"></block-static>
    <sortable-container :page="page"></sortable-container>
    <block-static :block="page.pageStructure.footer"></block-static>
  </div>
</template>

<script>
import BlockStatic from './BlockStatic.vue';
import SortableContainer from './SortableContainer.vue';

export default {
  data() {
    return {};
  },
  props: ['page'],
  components: {
    BlockStatic,
    SortableContainer,
  },
};
</script>

<style>
.slr2-page-settings__content {
  background-color: var(--slr2-background);
  padding: var(--ui-space-inset-xl);
  display: grid;
  grid-auto-rows: auto;
  row-gap: var(--slr2-gap);
}
.slr2-page-settings__block {
  background-color: #fff;
  min-height: 96px;
  padding: var(--slr2-gap);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
