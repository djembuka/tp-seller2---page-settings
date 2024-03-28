<template>
  <div
    class="slr2-page-settings__left-menu__item"
    :class="{ 'slr2-page-settings__left-menu__item--active': page.active }"
    @click.prevent="click"
    :data-id="page.id"
  >
    <span>
      <img :src="page.icon" class="slr2-page-settings__left-menu__img" alt="" />
      {{ page.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    click() {
      if (this.page.active) return;

      if (this.page.id === 'settings') {
        this.clickSettings();
      } else {
        this.clickPage();
      }
    },
    clickSettings() {
      this.$store.commit('changeStep', 'settings');
      this.$store.commit('setPageActive', { pageId: this.page.id });
    },
    async clickPage() {
      //force blocks render
      const elem = document.getElementById(
        'seller2PageSettingsContainerSortable'
      );
      if (elem) {
        const event = new CustomEvent('seller2ForceBlocksRender');
        elem.dispatchEvent(event);
      }

      this.$store.commit('changeStep', 'step1');
      this.$store.commit('setPageActive', { pageId: this.page.id });
      this.$store.dispatch('loadPageBlocks', {
        pageId: this.page.id,
      });
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
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.slr2-page-settings__left-menu__item:not(
    .slr2-page-settings__left-menu__item--active
  ):hover {
  background-color: var(--slr2-light);
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
