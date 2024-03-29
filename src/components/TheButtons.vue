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
          this.$store.state.step === 'step3' &&
          !this.$store.getters.isEditedBlock
            ? this.$store.dispatch('saveSettings')
            : this.$store.dispatch('saveBlocks');
          break;
        case 'cancel': // reset data (blocks order, active variant, settings)
          this.$store.state.step === 'step3' &&
          !this.$store.getters.isEditedBlock
            ? this.$store.dispatch('resetSettings')
            : this.$store.dispatch('resetBlocks');
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
