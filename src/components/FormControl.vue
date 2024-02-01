<template>
  <component
    :is="`control-${controlProperty}`"
    :control="control"
    @input="input"
  >
  </component>
</template>

<script>
import ControlText from './controls/ControlText.vue';
import ControlTextarea from './controls/ControlTextarea.vue';
import ControlCheckboxCheckbox from './controls/ControlCheckboxCheckbox.vue';
import ControlMultiselect from './controls/ControlMultiselect.vue';
import ControlSelectRadio from './controls/ControlSelectRadio.vue';
import ControlHeading from './controls/ControlHeading.vue';
// import ControlCheckbox from './controls/ControlCheckbox.vue';
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
      this.$store.dispatch('changeControlValue', {
        control: this.control,
        value,
        checked,
      });
    },
  },
  components: {
    ControlText,
    ControlTextarea,
    ControlCheckboxCheckbox,
    ControlMultiselect,
    ControlSelectRadio,
    ControlHeading,
  },
};
</script>
