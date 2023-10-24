<template>
  <div
    class="slr2-page-settings__block slr2-page-settings__block--sortable"
    :data-blockid="block.blockId"
  >
    <div v-if="block.blockData.icon" class="slr2-page-settings__block__icon" v-html="block.blockData.icon"></div>
    <div v-if="block.blockData.title" class="slr2-page-settings__block__title">{{ block.blockData.title }}</div>
    <div v-if="block.blockData.description" class="slr2-page-settings__block__description">{{ block.blockData.description }}</div>
    <div v-if="block.blockData.edit" class="slr2-page-settings__block__edit">
        <span>{{ block.blockData.edit }}</span>
    </div>
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
</style>
