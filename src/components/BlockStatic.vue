<template>
  <div class="slr2-page-settings__block">
    <div
      v-if="block.blockData.icon"
      class="slr2-page-settings__block__icon"
      :style="'background-image: url(' + block.blockData.icon + ');'"
    ></div>
    <div v-if="block.blockData.title" class="slr2-page-settings__block__title">
      {{ block.blockData.title }}
    </div>
    <div
      v-if="block.blockData.description"
      class="slr2-page-settings__block__description"
    >
      {{ block.blockData.description['step1'] }}
    </div>
    <div v-if="block.blockData.edit" class="slr2-page-settings__block__edit">
      <span @click.prevent="edit">{{ block.blockData.edit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['block'],
  methods: {
    edit() {
      this.$store.commit('changeStep', 'step2');
      if (this.$store.getters.isEditedBlock) {
        this.$store.commit('setBlockIsEdited', {
          blockId: this.$store.getters.isEditedBlock.blockId,
          isEdited: false,
        });
      }
      this.$store.commit('setBlockIsEdited', {
        blockId: this.block.blockId,
        isEdited: true,
      });
    },
  },
};
</script>

<style>
/*Block styles in TheMainContent.vue component*/
</style>
