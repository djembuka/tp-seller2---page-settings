<template>
  <div class="slr2-page-settings__button-cancel" @click.prevent="click">
    Отмена
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$store.commit('resetPages');
      this.$store.commit('sortBlocks');
      //force blocks render
      const event = new CustomEvent('seller2ForceBlocksRender');
      document
        .getElementById('seller2PageSettingsSortableContainer')
        .dispatchEvent(event);
    },
  },
};
</script>

<style>
.slr2-page-settings__button-cancel {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--ui-font-size-xl);
  color: #353cb1;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  cursor: pointer;
}
.slr2-page-settings__button-cancel:hover {
  opacity: 0.7;
}
.slr2-page-settings__button-cancel--disabled {
  opacity: 0.1;
  cursor: default;
}
</style>
