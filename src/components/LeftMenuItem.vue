<template>
  <div
    class="slr2-page-settings__left-menu__item"
    :class="{ 'slr2-page-settings__left-menu__item--active': page.active }"
    @click.prevent="click"
    :data-id="page.id"
  >
    {{ page.name }}
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    click() {
      if (this.$store.getters.isEditedBlock) {
        this.$store.commit('setBlockIsEdited', {
          pageId: this.$store.getters.activePage.id,
          blockId: this.$store.getters.isEditedBlock.id,
          isEdited: false,
        });
      }

      this.$store.commit('changeStep', 'step1');
      this.$store.commit('setPageActive', { pageId: this.page.id });
    },
  },
};
</script>

<style>
.slr2-page-settings__left-menu__item {
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__left-menu__item:hover {
  opacity: 0.7;
}
.slr2-page-settings__left-menu__item--active {
  color: red;
}
</style>
