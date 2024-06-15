<template>
  <the-breadcrumbs :items="breadcrumbs"></the-breadcrumbs>
  <div class="slr2-page-settings__settings" v-if="$store.state.render">
    <div class="slr2-page-settings__settings-info">
      <div class="slr2-page-settings__settings__title">
        {{ $store.state.lang.settingsTitle + ': ' + variant.name }}
      </div>
      <div
        class="slr2-page-settings__settings__text"
        v-html="$store.state.lang.settingsText"
      ></div>
    </div>

    <form action="" method="" enctype="multipart/form-data" ref="form">
      <form-control
        v-for="control in properties"
        :key="control.id"
        :control="control"
      ></form-control>
    </form>
  </div>
</template>

<script>
import FormControl from './FormControl.vue';
import TheBreadcrumbs from './TheBreadcrumbs.vue';

export default {
  props: {
    stepData: {
      type: Object,
      required: true,
      default() {
        return { variant: {} };
      },
    },
  },
  computed: {
    variant() {
      return this.stepData.variant;
    },
    properties() {
      return this.variant.settings.properties;
    },
    formDataWatcher() {
      return this.$store.state.formDataWatcher;
    },
    breadcrumbs() {
      if (this.$store.getters.activePage.id === 'settings') {
        return {};
      } else if (this.$store.getters.activePage.id === 'colors') {
        return {
          step2: this.$store.getters.activePage.name,
        };
      } else {
        return {
          step1: this.$store.getters.activePage.name,
          step2: this.$store.getters.isEditedBlock.name,
        };
      }
    },
  },
  watch: {
    formDataWatcher() {
      this.setVariantFormData();
    },
  },
  methods: {
    setVariantFormData() {
      this.$store.commit('setVariantFormData', {
        variant: this.variant,
        formData: new FormData(this.$refs.form),
      });
    },
  },
  components: {
    FormControl,
    TheBreadcrumbs,
  },
  mounted() {
    this.properties.forEach((c) => {
      if (c.dependency) {
        let checkbox = this.properties.find((ch) => ch.id === c.dependency);
        c.disabled = !checkbox.checked;
      }
    });
  },
};
</script>

<style>
.twpx-form-control:last-child {
  margin-bottom: 32px;
}
.slr2-page-settings__settings {
  background-color: #fff;
  padding: calc(var(--slr2-padding) * 2) var(--slr2-padding) 0;
  position: relative;
  border-radius: 8px;
}
.slr2-page-settings__settings-info {
  margin-bottom: var(--slr2-gap-big);
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
