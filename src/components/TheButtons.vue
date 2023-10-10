<template>
  <div class="slr2-page-settings__buttons">
    <button-cancel :name="Отмена" :theme="link"></button-cancel>
    <button-save :name="Сохранить" :theme="def"></button-save>
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
