<template>
  <component
    :is="`control-${controlProperty}`"
    :control="control"
    @input="input"
  >
  </component>
</template>

<script>
import ControlFile from './controls/ControlFile.vue';
import ControlText from './controls/ControlText.vue';
import ControlTextareaPlain from './controls/ControlTextareaPlain.vue';
import ControlTextareaFormatted from './controls/ControlTextareaFormatted.vue';
import ControlCheckboxCheckbox from './controls/ControlCheckboxCheckbox.vue';
import ControlMultiselect from './controls/ControlMultiselect.vue';
import ControlSelectDropdown from './controls/ControlSelectDropdown.vue';
import ControlSelectRadio from './controls/ControlSelectRadio.vue';
import ControlHeading from './controls/ControlHeading.vue';
import ControlCheckboxSwitch from './controls/ControlCheckboxSwitch.vue';
import ControlDateSingle from './controls/ControlDateSingle.vue';
import ControlDateRange from './controls/ControlDateRange.vue';
import ControlColor from './controls/ControlColor.vue';
// import ControlFile from './controls/ControlFile.vue';

export default {
  data() {
    return {
      controlProperty: `${this.control.property}${
        this.control.type ? '-' + this.control.type : ''
      }`,
    };
  },
  props: ['control', 'variantId'],
  methods: {
    input({ value, checked }) {
      this.$store.dispatch('rememberVariantSettings', {
        control: this.control,
      });
      this.$store.dispatch('changeControlValue', {
        control: this.control,
        value,
        checked,
      });
    },
  },
  components: {
    ControlFile,
    ControlText,
    ControlTextareaPlain,
    ControlTextareaFormatted,
    ControlCheckboxCheckbox,
    ControlMultiselect,
    ControlSelectDropdown,
    ControlSelectRadio,
    ControlHeading,
    ControlCheckboxSwitch,
    ControlDateSingle,
    ControlDateRange,
    ControlColor,
  },
};
</script>
