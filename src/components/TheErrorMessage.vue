<template>
  <div
    v-if="error"
    class="slr2-page-settings__error"
    @click="clickError($event)"
  >
    <div class="slr2-page-settings__error__content">
      <div class="slr2-page-settings__error__text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M0,0V5"
            transform="translate(12 9)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            d="M10,18.817H3.939c-3.47,0-4.92-2.48-3.24-5.51l3.12-5.62,2.94-5.28c1.78-3.21,4.7-3.21,6.48,0l2.94,5.29,3.12,5.62c1.68,3.03.22,5.51-3.24,5.51H10Z"
            transform="translate(2 2.592)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            d="M0,0H.009"
            transform="translate(11.995 17)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path d="M0,0H24V24H0Z" fill="none" opacity="0" />
        </svg>
        <span v-html="error"></span>
      </div>
      <div class="btn btn-md" @click="clickError">Понятно</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
  methods: {
    clickError(event) {
      if (
        event.target.classList.contains('slr2-page-settings__error') ||
        event.target.classList.contains('btn')
      ) {
        this.$store.commit('showError', {
          error: false,
        });
      }
    },
  },
};
</script>

<style>
.slr2-page-settings__error {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.733);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  z-index: 1000;
}
.slr2-page-settings__error__content {
  background: #ff3939;
  border-radius: 7px;
  padding: 29px 40px 29px 34px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}
.slr2-page-settings__error__text {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slr2-page-settings__error__text svg {
  margin-right: 2rem;
  flex-shrink: 0;
}
.slr2-page-settings__error .btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
.slr2-page-settings__error .btn:hover {
  background-color: rgba(255, 255, 255, 0.267);
}
</style>
