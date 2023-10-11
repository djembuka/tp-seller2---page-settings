<template>
  <div
    class="slr2-page-settings__block slr2-page-settings__block--sortable"
    :data-blockid="block.blockId"
  >
    {{ block.blockName }}
  </div>
</template>

<script>
export default {
  props: ['block'],
};
</script>

<style>
.slr2-page-settings__block--sortable {
  cursor: move;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}
.slr2-page-settings__block--sortable:hover {
  background-color: aquamarine;
}
</style>
