<template>
  <div
    class="slr2-page-settings__block slr2-page-settings__block--sortable"
    :data-id="block.id"
  >
    <div
      v-if="block.data.icon"
      class="slr2-page-settings__block__icon"
      v-html="block.data.icon"
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
    <div v-if="block.data.edit" class="slr2-page-settings__block__edit">
      <span @click.prevent="edit">{{ block.data.edit }}</span>
    </div>
    <control-switcher :block="block"></control-switcher>
  </div>
</template>

<script>
import ControlSwitcher from './ControlSwitcher.vue';

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
