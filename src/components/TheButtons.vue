<template>
  <div class="slr2-page-settings__buttons">
    <component
      v-for="button in this.$store.state.buttons"
      :key="button.buttonCode"
      :is="`button${button.buttonCode
        .substring(0, 1)
        .toUpperCase()}${button.buttonCode.substring(1).toLowerCase()}`"
      :button="button"
    ></component>
  </div>
</template>

<script>
import ButtonCancel from './ButtonCancel.vue';
import ButtonSave from './ButtonSave.vue';

export default {
  components: {
    ButtonCancel,
    ButtonSave,
  },
};
</script>

<style>
.slr2-page-settings__buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--slr2-gap);
}
</style>
