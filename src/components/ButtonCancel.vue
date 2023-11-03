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
      if (this.$store.state.step === 'step1') {
        this.$store.commit('sortBlocks');
      } else if (this.$store.state.step === 'step3') {
        this.forceRender();
      }
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
