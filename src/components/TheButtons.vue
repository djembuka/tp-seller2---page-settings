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
        case 'save':
          if (this.$store.state.step === 'step3') {
            this.$store.commit('setFormDataWatcher'); //create FormData of the step3
          }
          setTimeout(() => {
            this.$store.dispatch('saveBlocks'); //send the data of the current step to the server
          }, 0);
          break;
        case 'cancel':
          this.$store.dispatch('resetBlocks'); // reset data (blocks order, active variant, settings)
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
