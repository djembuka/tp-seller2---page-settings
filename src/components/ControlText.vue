<template>
  <div class="slr2-page-settings__control">
    {{ control }}
  </div>
</template>

<script>
export default {
  prop: ['control'],
};
</script>

<style>
.slr2-page-settings__control {
  margin-bottom: 24px;
  position: relative;
}
.slr2-page-settings__label {
  position: absolute;
  top: 0;
  left: 14px;
  margin: 0;
  padding: 0;
  color: #80868e;
  font-size: 14px;
  -webkit-transition: -webkit-transform 0.2s ease-out,
    -webkit-font-size 0.2s ease-out;
  transition: transform 0.2s ease-out, font-size 0.2s ease-out;
  -webkit-transform: translateY(14px);
  transform: translateY(14px);
}
.slr2-page-settings__control-text {
  display: block !important;
  width: 100%;
  margin: 0 !important;
  padding: 0 14px !important;
  border: 1px solid #c6cdd3 !important;
  height: 48px !important;
  line-height: 48px;
  border-radius: 3px !important;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px !important;
  -webkit-transition: border-color 0.3s ease;
  transition: border-color 0.3s ease;
  outline: none !important;
  box-shadow: none !important;
}
.slr2-page-settings__control-text:focus,
.slr2-page-settings__control-text:hover {
  outline: none;
  border-color: #80b6e3 !important;
}
</style>
