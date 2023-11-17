<template>
  <div
    class="slr2-page-settings__block slr2-page-settings__block--sortable"
    :data-id="block.id"
  >
    <div
      v-if="block.icon"
      class="slr2-page-settings__block__icon"
      v-html="block.icon"
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
    <control-switcher :block="block"></control-switcher>
  </div>
</template>

<script>
import ControlSwitcher from './ControlSwitcher.vue';

export default {
  props: ['block'],
  computed: {
    blockVariantTitle() {
      const variant = this.block.variants.find(
        (t) => t.id === this.block.activeVariant
      );
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
  components: {
    ControlSwitcher,
  },
};
</script>

<style>
.slr2-page-settings__block--sortable {
  cursor: move;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}
</style>
