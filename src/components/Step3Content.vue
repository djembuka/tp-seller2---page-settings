<template>
  <div class="slr2-page-settings__settings" v-if="$store.state.render">
    <div class="slr2-page-settings__settings-info">
      <div class="slr2-page-settings__settings__title">
        {{ $store.state.lang.settingsTitle }}: {{ template.title }}
      </div>
      <div
        class="slr2-page-settings__settings__text"
        v-html="$store.state.lang.settingsText"
      ></div>
    </div>

    <form action="" method="">
      <component
        v-for="(control, index) in template.settings"
        :is="`control-${control.type}`"
        :key="index * Math.floor(Math.random() * 100000)"
        :control="control"
        :templateId="template.id"
      >
      </component>
    </form>
  </div>
</template>

<script>
import ControlText from './ControlText.vue';
import ControlFile from './ControlFile.vue';

export default {
  data() {
    return {
      template: this.$store.getters.isEditedBlock.templates.find(
        (t) => t.checked
      ),
    };
  },
  methods: {},
  components: {
    ControlText,
    ControlFile,
  },
};
</script>

<style>
.slr2-page-settings__settings {
  background-color: #fff;
  padding: var(--slr2-padding) var(--slr2-padding) 0;
  position: relative;
  border-radius: 8px;
}
.slr2-page-settings__settings-info {
  margin-bottom: var(--slr2-gap);
}
.slr2-page-settings__settings__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__settings__text {
  font-size: 14px;
}
</style>
