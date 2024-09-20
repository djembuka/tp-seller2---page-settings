<template>
  <div
    v-if="error"
    class="slr2-page-settings__error"
    @click="clickError($event)"
  >
    <div class="slr2-page-settings__error__content">
      <div class="slr2-page-settings__error__text">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icons">
            <path
              id="Alert"
              d="M12 12V7.5M12 15.3354V15.375M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <div>
          <span v-html="error"></span>
          <div class="btn btn-md" @click="clickError">Отменить</div>
        </div>
      </div>
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
  font-family: var(--ui-font-family-open-sans);
  font-size: var(--ui-font-size);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.733);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  z-index: 1000;
}
.slr2-page-settings__error__content {
  background: #ff3939;
  border-radius: 7px;
  padding: 29px 40px 29px 34px;
  color: #fff;
  width: 80%;
}
.slr2-page-settings__error__text {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.slr2-page-settings__error__text svg {
  margin-right: 2rem;
  flex-shrink: 0;
}
.slr2-page-settings__error .btn {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  width: 100px;
}
.slr2-page-settings__error .btn:hover {
  background-color: rgba(255, 255, 255, 0.267);
}
</style>
