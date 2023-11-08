<template>
  <div class="slr2-page-settings__breadcrumbs">
    <div
      class="slr2-page-settings__breadcrumbs__item"
      @click.prevent="$store.commit('changeStep', 'step1')"
    >
      {{ $store.getters.activePage.name }}
    </div>
    <div
      class="slr2-page-settings__breadcrumbs__item"
      @click.prevent="$store.commit('changeStep', 'step2')"
    >
      {{ $store.getters.isEditedBlock.data.title }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.slr2-page-settings__breadcrumbs {
  display: flex;
  flex-wrap: wrap;
}
.slr2-page-settings__breadcrumbs__item {
  padding: 0 var(--slr2-padding);
  border-radius: 8px;
  font-size: 11px;
  color: var(--slr2-buttons);
  background-color: var(--slr2-light);
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: var(--slr2-gap-middle);
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__breadcrumbs__item:hover {
  opacity: 0.7;
}
</style>
