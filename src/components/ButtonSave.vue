<template>
  <div class="slr2-page-settings__button-save" @click.prevent="click">
    Сохранить
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$store.state.onSave(this.$store.state.pages);
      this.$store.commit('createMemory');
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
  background-color: #353cb1;
  color: #fff;
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
