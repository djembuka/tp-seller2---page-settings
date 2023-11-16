<template>
  <div class="slr2-page-settings__block">
    <div
      v-if="block.icon"
      class="slr2-page-settings__block__icon"
      :style="'background-image: url(' + block.icon + ');'"
    ></div>
    <div v-if="block.name" class="slr2-page-settings__block__title">
      {{ blockVariantTitle }}
    </div>
    <div
      v-if="block.description"
      class="slr2-page-settings__block__description"
    >
      {{ block.description['step1'] }}
    </div>
    <div v-if="block.variants" class="slr2-page-settings__block__edit">
      <span @click.prevent="edit">{{ $store.state.lang.edit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['block'],
  computed: {
    blockVariantTitle() {
      const variant = this.block.variants.find((t) => t.checked);
      return variant ? variant.name : '';
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
