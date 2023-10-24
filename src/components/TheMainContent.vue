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
  padding: var(--slr2-padding) var(--slr2-padding) var(--slr2-gap);
  position: relative;
  border-radius: 8px;
  -webkit-transition: box-shadow .3s ease;
  transition: box-shadow .3s ease;
}
.slr2-page-settings__block:hover {
    box-shadow: 0px 3px 6px #353CB11A;
}
.slr2-page-settings__block__icon {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
}
.slr2-page-settings__block__title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
}
.slr2-page-settings__block__description {
    font-size: 14px;
    margin-bottom: 16px;
}
.slr2-page-settings__block__edit span {
    font-size: 12px;
    color: #353CB1;
    cursor: pointer;
  -webkit-transition: opacity .3s ease;
  transition: opacity .3s ease;
}
.slr2-page-settings__block__edit span:hover {
    opacity: .7;
}
</style>
