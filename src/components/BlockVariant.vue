<template>
  <div
    class="slr2-page-settings__variant"
    :class="{ 'slr2-page-settings__variant--checked': active }"
    @click.prevent="click"
  >
    <div class="slr2-page-settings__variant__title">
      <div class="slr2-page-settings__variant__title-text">
        {{ variant.name }}
      </div>
      <control-radio :checked="active"></control-radio>
    </div>
    <img :src="variant.preview" class="slr2-page-settings__variant__img" />
    <div class="slr2-page-settings__variant__edit" v-if="variant.settings">
      <span @click="edit">{{ $store.state.lang.tune }}</span>
    </div>
  </div>
</template>

<script>
import ControlRadio from './ControlRadio.vue';

export default {
  data() {
    return {};
  },
  props: ['variant'],
  computed: {
    active() {
      return (
        this.$store.getters.isEditedBlock.activeVariant === this.variant.id
      );
    },
  },
  methods: {
    click() {
      this.$store.commit('setActiveVariant', {
        pageId: this.$store.getters.activePage.id,
        blockId: this.$store.getters.isEditedBlock.id,
        variantId: this.variant.id,
      });
    },
    edit() {
      this.click();
      this.$store.commit('changeStep', 'step3');
    },
  },
  components: {
    ControlRadio,
  },
};
</script>

<style>
.slr2-page-settings__variant {
  position: relative;
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: var(--slr2-padding);
  margin-bottom: var(--slr2-padding);
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
}
.slr2-page-settings__variant:hover {
  border-color: #fff;
  box-shadow: 0px 3px 6px #353cb11a;
}
.slr2-page-settings__variant--checked {
  border-color: #f7f9ff;
  background-color: #f7f9ff;
}
.slr2-page-settings__variant--checked:hover {
  border-color: #f7f9ff;
  box-shadow: none;
}
.slr2-page-settings__variant__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__variant__title-text {
  font-size: var(--ui-font-size-md);
  font-weight: bold;
  line-height: 1.1;
  margin-right: var(--slr2-gap-middle);
}
.slr2-page-settings__variant__img {
  display: block;
  width: 100%;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__variant__edit span {
  font-size: 12px;
  color: #353cb1;
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__variant__edit span:hover {
  opacity: 0.7;
}
.slr2-page-settings__variant .slr2-page-settings__radio {
}
</style>
