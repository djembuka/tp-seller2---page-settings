<template>
  <div
    class="slr2-page-settings__switcher"
    :class="{ 'slr2-page-settings__switcher--off': offState }"
    @click.prevent="click"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      offState: !this.block.settings.enabled,
    };
  },
  props: ['block'],
  methods: {
    click() {
      this.offState = !this.offState;

      //create settingsMemory
      if (!this.block.settingsMemory) {
        this.$store.commit('createBlockSettingsMemory', {
          blockId: this.block.id,
        });
      }

      //save to settings
      this.$store.commit('setBlockSettings', {
        blockId: this.block.id,
        property: 'enabled',
        value: !this.offState,
      });
    },
  },
};
</script>

<style scoped>
.slr2-page-settings__switcher {
  width: 36px;
  height: 24px;
  border-radius: 12px;
  background-color: #c5eb52;
  position: relative;
  cursor: pointer;
}
.slr2-page-settings__switcher.slr2-page-settings__switcher--off {
  background-color: #d6dfe3;
}
.slr2-page-settings__switcher::before {
  content: '';
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: #585c65;
  position: absolute;
  top: 3px;
  left: 4px;
  -webkit-transition: left 0.1s linear;
  transition: left 0.1s linear;
  z-index: 10;
}
.slr2-page-settings__switcher.slr2-page-settings__switcher--off::before {
  top: 3px;
  left: 14px;
}
.slr2-page-settings__block .slr2-page-settings__switcher {
  position: absolute;
  bottom: 20px;
  right: 16px;
  z-index: 10;
}
</style>
