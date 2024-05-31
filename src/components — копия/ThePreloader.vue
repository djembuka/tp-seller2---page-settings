<template>
  <div class="slr2-page-settings__preloader" v-if="show"></div>
</template>

<script>
export default {
  computed: {
    show() {
      return !this.$store.state.alert && this.$store.state.preloader;
    },
  },
};
</script>

<style>
.slr2-page-settings__preloader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffffdd;
  z-index: 10;
}
.slr2-page-settings__preloader:after {
  content: '';
  position: absolute;
  height: 32px;
  width: 32px;
  top: calc(50% - 16px);
  right: calc(50% - 16px);
  animation: circle 1.3s infinite linear;
  border: 2px solid #0a16aa;
  border-radius: 50%;
  border-right-color: transparent;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes circle {
  0% {
    -webkit-transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
