<template>
  <div class="slr2-page-settings__button-cancel" @click.prevent="click">
    Отмена
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$store.commit('setMemory', null);

      //if the button is from the alert modal
      if (this.$store.state.alert) {
        const step = this.$store.state.alert;
        this.$store.commit('setAlert', false);
        this.$store.commit('changeStep', step);
      }

      const step = this.$store.state.step;
      let event;

      switch (step) {
        case 'step1':
          //force blocks render
          event = new CustomEvent('seller2ForceBlocksRender');
          document
            .getElementById('seller2PageSettingsContainerSortable')
            .dispatchEvent(event);
          break;
        case 'step2':
          this.$store.commit('setActiveVariant', {
            pageId: this.$store.getters.activePage.id,
            blockId: this.$store.getters.isEditedBlock.id,
            variantId: this.$store.getters.isEditedBlock.previousVariant,
          });
          break;
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
