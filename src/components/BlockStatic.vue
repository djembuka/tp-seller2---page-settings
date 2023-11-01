<template>
  <div class="slr2-page-settings__block">
    <div
      v-if="block.data.icon"
      class="slr2-page-settings__block__icon"
      :style="'background-image: url(' + block.data.icon + ');'"
    ></div>
    <div v-if="block.data.title" class="slr2-page-settings__block__title">
      {{ blockTemplateTitle }}
    </div>
    <div
      v-if="block.data.description"
      class="slr2-page-settings__block__description"
    >
      {{ block.data.description['step1'] }}
    </div>
    <div
      v-if="block.templates && block.data.edit"
      class="slr2-page-settings__block__edit"
    >
      <span @click.prevent="edit">{{ block.data.edit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['block'],
  computed: {
    blockTemplateTitle() {
      return this.block.templates.find((t) => t.checked).title;
    },
  },
  methods: {
    edit() {
      this.$store.commit('changeStep', 'step2');
      this.$store.commit('setBlockIsEdited', {
        pageId: this.$store.getters.activePage.id,
        blockId: this.block.id,
        isEdited: true,
      });
    },
  },
};
</script>

<style>
/*Block styles in TheMainContent.vue component*/
</style>
