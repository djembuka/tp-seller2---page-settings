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
          this.$store.commit('setFormDataWatcher');
          setTimeout(() => {
            this.$store.dispatch('saveBlocks');
          }, 0);
          break;
        case 'cancel':
          this.cancel();
          break;
      }
    },
    cancel() {
      console.log('cancel');
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
