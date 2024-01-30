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
import ControlCheckboxCheckbox from './controls/ControlCheckboxCheckbox.vue';
// import ControlTextarea from './controls/ControlTextarea.vue';
// import ControlSelect from './controls/ControlSelect.vue';
// import ControlCheckbox from './controls/ControlCheckbox.vue';
// import ControlMultiselect from './controls/ControlMultiselect.vue';
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
    input(value) {
      this.$store.dispatch('changeControlValue', {
        control: this.control,
        value,
      });
    },
  },
  components: {
    ControlText,
    ControlCheckboxCheckbox,
  },
};
</script>
