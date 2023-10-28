<template>
  <div class="slr2-page-settings__templates">
    <div class="slr2-page-settings__templates-block-info">
      <div
        v-if="block.data.icon"
        class="slr2-page-settings__block__icon"
        :style="'background-image: url(' + block.data.icon + ');'"
      ></div>
      <div
        v-if="block.data.title"
        class="slr2-page-settings__block__title"
      >
        {{ block.data.title }}
      </div>
      <div
        v-if="block.data.description"
        class="slr2-page-settings__block__description"
      >
        {{ block.data.description['step2'] }}
      </div>
    </div>

    <block-template
      v-for="template in block.templates"
      :key="template.id"
      :template="template"
    ></block-template>
  </div>
</template>

<script>
import BlockTemplate from './BlockTemplate.vue';

export default {
  data() {
    return {
      block: this.$store.getters.isEditedBlock,
    };
  },
  methods: {},
  components: {
    BlockTemplate,
  },
};
</script>

<style>
.slr2-page-settings__templates {
  background-color: #fff;
  padding: var(--slr2-padding) var(--slr2-padding) 0;
  position: relative;
  border-radius: 8px;
}
.slr2-page-settings__templates-block-info {
  margin-bottom: var(--slr2-gap);
}
</style>
