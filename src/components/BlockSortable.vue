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
    <control-checkbox-switch
      :control="control"
      @input="input"
    ></control-checkbox-switch>
  </div>
</template>

<script>
import ControlCheckboxSwitch from './controls/ControlCheckboxSwitch.vue';

export default {
  data() {
    return {
      control: {
        property: 'checkbox',
        type: 'switch',
        required: false,
        value: 'on',
        checked: this.block.settings.enabled,
        disabled: false,
      },
    };
  },
  props: ['block'],
  computed: {
    blockVariantTitle() {
      const variant = this.block.variants.find(
        (t) => t.id === this.block.activeVariant
      );
      return variant ? variant.name : '';
    },
    checkedWatcher() {
      return this.block.settings.enabled;
    },
  },
  watch: {
    checkedWatcher() {
      this.changeChecked();
    },
  },
  methods: {
    changeChecked() {
      console.log('sdf' + this.block.id, this.block.settings.enabled);
      this.control.checked = this.block.settings.enabled;
    },
    edit() {
      this.$store.commit('changeStep', 'step2');
      this.$store.commit('setBlockIsEdited', {
        pageId: this.$store.getters.activePage.id,
        blockId: this.block.id,
        isEdited: true,
      });
    },
    input() {
      this.control.checked = !this.control.checked;

      //create settingsMemory
      if (!this.$store.state.memory || !this.$store.state.memory.enabled) {
        let enabled = {};
        this.$store.getters.activePage.blocks.other.forEach((b) => {
          enabled[b.id] = b.settings.enabled;
        });
        this.$store.dispatch('rememberBlocksEnabled', enabled);
      }

      //save to settings
      this.$store.commit('setBlockSettings', {
        blockId: this.block.id,
        property: 'enabled',
        value: this.control.checked,
      });
    },
  },
  components: {
    ControlCheckboxSwitch,
  },
};
</script>

<style>
.slr2-page-settings__block--sortable {
  cursor: move;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
}
.slr2-page-settings__block .twpx-form-control--checkbox {
  position: absolute;
  bottom: 20px;
  right: 16px;
  margin-bottom: 0 !important;
  z-index: 10;
}
</style>
