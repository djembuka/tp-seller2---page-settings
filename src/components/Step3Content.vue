<template>
  <the-breadcrumbs></the-breadcrumbs>
  <div class="slr2-page-settings__settings" v-if="$store.state.render">
    <div class="slr2-page-settings__settings-info">
      <div class="slr2-page-settings__settings__title">
        {{ $store.state.lang.settingsTitle }}: {{ variant.name }}
      </div>
      <div
        class="slr2-page-settings__settings__text"
        v-html="$store.state.lang.settingsText"
      ></div>
    </div>

    <form action="" method="">
      <component
        v-for="(control, index) in variant.settings.properties"
        :is="`control-${control.property}`"
        :key="Number(index) * Math.floor(Math.random() * 100000)"
        :control="control"
        :variantId="variant.id"
      >
      </component>
    </form>
  </div>
</template>

<script>
import ControlText from './ControlText.vue';
import ControlTextarea from './ControlTextarea.vue';
import ControlSelect from './ControlSelect.vue';
import ControlCheckbox from './ControlCheckbox.vue';
import ControlMultiselect from './ControlMultiselect.vue';
import ControlFile from './ControlFile.vue';
import ControlDate from './ControlDatepicker.vue';
import TheBreadcrumbs from './TheBreadcrumbs.vue';

export default {
  data() {
    return {
      variant: this.$store.getters.isEditedBlock.variants.find(
        (v) => v.id === this.$store.getters.isEditedBlock.activeVariant
      ),
    };
  },
  methods: {},
  components: {
    ControlText,
    ControlTextarea,
    ControlSelect,
    ControlCheckbox,
    ControlMultiselect,
    ControlFile,
    ControlDate,
    TheBreadcrumbs,
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
