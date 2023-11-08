<template>
  <div
    class="slr2-page-settings__left-menu__item"
    :class="{ 'slr2-page-settings__left-menu__item--active': page.active }"
    @click.prevent="click"
    :data-id="page.id"
  >
    <span>
      <img :src="page.icon" class="slr2-page-settings__left-menu__img" alt="" />
      <span class="slr2-page-settings__left-menu__text">{{ page.name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    click() {
      if (this.page.active) return;

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
  height: 64px;
  font-family: var(--ui-font-family-open-sans);
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 5px 32px;
  border-radius: 8px;
  cursor: pointer;
  color: var(--slr2-buttons);
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}
.slr2-page-settings__left-menu__text {
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__left-menu__item:not(
    .slr2-page-settings__left-menu__item--active
  ):hover {
  background-color: var(--slr2-light);
}
.slr2-page-settings__left-menu__item:not(
    .slr2-page-settings__left-menu__item--active
  ):hover
  .slr2-page-settings__left-menu__text {
  opacity: 0.7;
}
.slr2-page-settings__left-menu__item--active {
  color: #2d3142;
  cursor: default;
}
.slr2-page-settings__left-menu__item--active
  .slr2-page-settings__left-menu__img {
  filter: grayscale(1);
}
.slr2-page-settings__left-menu__item span {
  display: flex;
  align-items: center;
}
.slr2-page-settings__left-menu__img {
  width: 24px;
  height: 24px;
  margin-right: var(--slr2-gap-middle);
}
</style>
