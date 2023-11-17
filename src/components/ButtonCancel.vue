<template>
  <div class="slr2-page-settings__button-cancel" @click.prevent="click">
    Отмена
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      //force blocks render
      if (this.$store.state.step === 'step1') {
        const event = new CustomEvent('seller2ForceBlocksRender');
        document
          .getElementById('seller2PageSettingsContainerSortable')
          .dispatchEvent(event);
      }
    },
    async forceRender() {
      this.$store.commit('setRender', false);
      await this.$nextTick();
      this.$store.commit('setRender', true);
      await this.$nextTick();
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
  font-weight: bold;
  color: var(--slr2-buttons);
  background-color: var(--slr2-light);
  border-radius: 8px;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__button-cancel:hover {
  opacity: 0.7;
}
.slr2-page-settings__button-cancel--disabled {
  opacity: 0.1;
  cursor: default;
}
</style>
