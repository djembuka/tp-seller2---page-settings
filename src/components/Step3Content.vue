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

    <form-control
      v-for="control in variant.settings.properties"
      :key="control.id"
      :control="control"
      :variantId="variant.id"
    ></form-control>
  </div>
</template>

<script>
import FormControl from './FormControl.vue';
import TheBreadcrumbs from './TheBreadcrumbs.vue';

export default {
  data() {
    return {};
  },
  computed: {
    variant() {
      return this.$store.getters.isEditedBlock.variants.find(
        (v) => v.id === this.$store.getters.isEditedBlock.activeVariant
      );
    },
  },
  methods: {},
  components: {
    FormControl,
    TheBreadcrumbs,
  },
  mounted() {
    this.variant.settings.properties.forEach((c) => {
      if (c.dependency) {
        let checkbox = this.variant.settings.properties.find(
          (ch) => ch.id === c.dependency
        );
        c.disabled = !checkbox.checked;
      }
    });
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
