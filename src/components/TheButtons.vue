<template>
  <div class="slr2-page-settings__buttons">
    <button-cancel @clickButton="clickButton"></button-cancel>
    <button-save @clickButton="clickButton"></button-save>
  </div>
</template>

<script>
import ButtonCancel from './ButtonCancel.vue';
import ButtonSave from './ButtonSave.vue';

export default {
  methods: {
    clickButton(type) {
      if (type === 'save') {
        switch (this.$store.getters.activePage.id) {
          case 'settings':
            this.$store.dispatch('saveSettings');
            break;
          case 'colors':
            this.$store.dispatch('saveColors');
            break;
          default:
            this.$store.dispatch('saveBlocks');
            break;
        }
      } else if (type === 'cancel') {
        switch (this.$store.getters.activePage.id) {
          case 'settings':
            this.$store.dispatch('resetSettings');
            break;
          case 'colors':
            this.$store.dispatch('resetColors');
            break;
          default:
            this.$store.dispatch('resetBlocks');
            break;
        }
      }
    },
  },
  components: {
    ButtonCancel,
    ButtonSave,
  },
};
</script>

<style>
.slr2-page-settings__buttons {
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: var(--slr2-gap);
}
</style>
