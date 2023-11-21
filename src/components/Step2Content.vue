<template>
  <the-breadcrumbs></the-breadcrumbs>
  <div class="slr2-page-settings__variants">
    <div class="slr2-page-settings__variants-block-info">
      <div v-if="block.name" class="slr2-page-settings__block__title">
        {{ block.name }}
      </div>
      <div
        v-if="block.description"
        class="slr2-page-settings__block__description"
      >
        {{ block.description['step2'] }}
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
import TheBreadcrumbs from './TheBreadcrumbs.vue';

export default {
  data() {
    return {
      block: this.$store.getters.isEditedBlock,
    };
  },
  methods: {},
  components: {
    BlockVariant,
    TheBreadcrumbs,
  },
  mounted() {
    this.$store.commit('setPreviousVariant', {
      pageId: this.$store.getters.activePage.id,
      blockId: this.$store.getters.isEditedBlock.id,
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
