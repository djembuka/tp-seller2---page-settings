<template>
  <div class="slr2-page-settings__sites">
    <div
      class="slr2-page-settings__sites-item"
      :class="{ 'slr2-page-settings__sites-item--disabled': site.disabled }"
      v-for="site in sites"
      :key="site.id"
    >
      <svg
        v-if="site.disabled"
        class="slr2-page-settings__sites-item__lock"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="lock">
          <path
            d="M4.33325 6.66601V5.33301C4.33325 3.12601 5.00025 1.33301 8.33325 1.33301C11.6663 1.33301 12.3333 3.12601 12.3333 5.33301V6.66601"
            stroke="#2D3142"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.99928 10.667C9.99928 10.9967 9.90149 11.3191 9.71827 11.5932C9.53506 11.8674 9.27465 12.0811 8.96999 12.2072C8.66532 12.3333 8.33009 12.3663 8.0067 12.3019C7.68331 12.2375 7.38628 12.0786 7.15318 11.8454C6.92009 11.6122 6.7614 11.315 6.69719 10.9916C6.63298 10.6682 6.66614 10.333 6.79246 10.0284C6.91879 9.72379 7.13261 9.46351 7.40688 9.28045C7.68114 9.0974 8.00354 8.9998 8.33328 9C8.77523 9.00027 9.19898 9.17601 9.51138 9.48861C9.82379 9.8012 9.99928 10.2251 9.99928 10.667Z"
            stroke="#2D3142"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.6663 14.667H4.99926C2.33326 14.667 1.66626 14 1.66626 11.334V9.99999C1.66626 7.33399 2.33326 6.66699 4.99926 6.66699H11.6663C14.3333 6.66699 14.9993 7.33399 14.9993 9.99999V11.334C14.9993 14 14.3333 14.667 11.6663 14.667Z"
            stroke="#2D3142"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>

      <div class="slr2-page-settings__sites-item__name" v-if="site.name">
        {{ site.name }}
      </div>
      <div
        class="slr2-page-settings__sites-item__description"
        v-if="site.description"
      >
        {{ site.description }}
      </div>
      <div class="slr2-page-settings__sites-item__link">
        <a href="" @click.prevent="choose(site)">Выбрать</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['sites'],
  methods: {
    choose(site) {
      this.$store.dispatch('chooseSite', { site });
    },
  },
};
</script>

<style>
.slr2-page-settings__sites {
  display: flex;
  padding: 16px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
}
.slr2-page-settings__sites-item {
  position: relative;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  display: flex;
  min-width: 300px;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  -webkit-transition: box-shadow 0.3s ease;
  transition: box-shadow 0.3s ease;
}
.slr2-page-settings__sites-item--disabled {
  opacity: 0.3;
  cursor: default;
  pointer-events: none;
}
.slr2-page-settings__sites-item:not(
    .slr2-page-settings__sites-item--disabled
  ):hover {
  box-shadow: 0px 3px 6px 0px rgba(53, 60, 177, 0.1);
}
.slr2-page-settings__sites-item__lock {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
}
.slr2-page-settings__sites-item__name {
  color: #2d3142;
  font-family: 'Open Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
}
.slr2-page-settings__sites-item__description {
  color: #2d3142;
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px; /* 120% */
}
.slr2-page-settings__sites-item__link {
  font-family: 'Open Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
