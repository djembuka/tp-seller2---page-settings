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
      switch (type) {
        case 'save': //send the data of the current step to the server
          this.$store.getters.isEditedBlock
            ? this.$store.dispatch('saveBlocks')
            : this.$store.dispatch('saveSettings');
          break;
        case 'cancel': // reset data (blocks order, active variant, settings)
          this.$store.getters.isEditedBlock
            ? this.$store.dispatch('resetBlocks')
            : this.$store.dispatch('resetSettings');
          break;
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
