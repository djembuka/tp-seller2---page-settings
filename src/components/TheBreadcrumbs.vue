<template>
  <div class="slr2-page-settings__breadcrumbs" v-if="Object.keys(items).length">
    <div
      class="slr2-page-settings__breadcrumbs__item"
      v-if="items.step1"
      @click.prevent="toStep1"
    >
      {{ items.step1 }}
    </div>
    <div
      class="slr2-page-settings__breadcrumbs__item"
      v-if="items.step2"
      @click.prevent="toStep2"
    >
      {{ items.step2 }}
    </div>
    <div
      class="slr2-page-settings__breadcrumbs__item"
      v-if="items.step3"
      @click.prevent="toStep3"
    >
      {{ items.step3 }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
  },
  methods: {
    toStep1() {
      this.$store.commit('changeStep', 'step1');
    },
    toStep2() {
      this.$store.commit('changeStep', 'step2');
    },
    toStep3() {
      this.$store.commit('changeStep', 'step3');
    },
  },
};
</script>

<style>
.slr2-page-settings__breadcrumbs {
  display: flex;
  flex-wrap: wrap;
}
.slr2-page-settings__breadcrumbs__item {
  padding: 0 var(--slr2-padding);
  border-radius: 8px;
  font-size: 11px;
  color: var(--slr2-buttons);
  background-color: var(--slr2-light);
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: var(--slr2-gap-middle);
  cursor: pointer;
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
}
.slr2-page-settings__breadcrumbs__item:hover {
  opacity: 0.7;
}
</style>
