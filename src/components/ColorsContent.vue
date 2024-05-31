<template>
  <div class="slr2-page-settings__variants">
    <div class="slr2-page-settings__variants-block-info">
      <div v-if="block.name" class="slr2-page-settings__block__title">
        {{ block.name }}
      </div>
      <div
        v-if="block.description"
        class="slr2-page-settings__block__description"
      >
        {{ block.description }}
      </div>
    </div>

    <block-variant
      v-for="variant in block.variants"
      :key="variant.id"
      :variant="variant"
      :active="variant.id === block.activeVariant"
    ></block-variant>
  </div>
</template>

<script>
import BlockVariant from './BlockVariant.vue';

export default {
  data() {
    return {
      block: this.$store.state.data.sites[0].colors,
    };
  },
  methods: {},
  components: {
    BlockVariant,
  },
  mounted() {
    this.$store.commit('setPreviousVariant', {
      pageId: this.$store.state.data.sites[0].colors.id,
      blockId: this.$store.state.data.sites[0].colors.id,
    });
  },
};
</script>

<style>
.slr2-page-settings__variants {
  background-color: #fff;
  padding: var(--slr2-padding) var(--slr2-padding) 0;
  position: relative;
  border-radius: 8px;
}
.slr2-page-settings__variants-block-info {
  margin-bottom: var(--slr2-gap);
}
</style>
