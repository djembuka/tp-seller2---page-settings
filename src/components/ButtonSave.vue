<template>
  <div class="slr2-page-settings__button-save" @click.prevent="click">
    Сохранить
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.save();
      this.$store.commit('createMemory');
    },
    async save() {
      let formData = new FormData(),
        controller = new AbortController(),
        response;
      //result;

      formData.set('action', this.$store.state.onSave.action);
      formData.set('data', JSON.stringify(this.$store.state.data));

      setTimeout(() => {
        if (!response) {
          controller.abort();
        }
      }, 20000);

      response = await fetch(this.$store.state.onSave.url, {
        method: 'POST',
        body: formData,
        signal: controller.signal,
      });

      //   result = await response.json();

      //   if (result && typeof result === 'object') {
      //     if (result.errors) {
      //       console.log(result.errors[0].message);
      //     }
      //   } else {
      //     console.log();
      //   }
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
