<template>
  <div class="slr2-page-settings__buttons">
    <component
      v-for="button in this.$store.state.buttons"
      :key="button.code"
      :is="`button${button.code.substring(0, 1).toUpperCase()}${button.code
        .substring(1)
        .toLowerCase()}`"
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
  grid-template-columns: 3fr 7fr;
  gap: var(--slr2-gap);
}
</style>
