<template>
  <div class="slr2-page-settings__button-save" @click.prevent="click">
    Сохранить
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.save();
    },
    async save() {
      switch (this.$store.state.step) {
        case 'step1':
          if (window.BX) {
            window.BX.ajax.runAction(
              `twinpx:seller.api.methods.saveBlocksOrder`,
              {
                data: {
                  sid: this.$store.state.data.sites[0].id,
                  page: this.$store.getters.activePage.id,
                  section: 'other',
                  blocks:
                    this.$store.state.memory ||
                    this.$store.getters.activePage.blocks.other.map(
                      (b) => b.id
                    ),
                },
              }
            );
            this.$store.commit('setMemory', null);
          }
          break;
        case 'step2':
          break;
        case 'step3':
          //saveBlockSettings
          break;
      }
    },
  },
};
</script>

<style>
.slr2-page-settings__button-save {
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--ui-font-size-xl);
  background-color: var(--slr2-buttons);
  color: #fff;
  border-radius: 8px;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  cursor: pointer;
}
.slr2-page-settings__button-save:hover {
  opacity: 0.7;
}
.slr2-page-settings__button-save--disabled {
  opacity: 0.1;
  cursor: default;
}
</style>
