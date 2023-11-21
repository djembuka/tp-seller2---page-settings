<template>
  <div class="slr2-page-settings__modal">
    <div class="slr2-page-settings__body">
      <div class="slr2-page-settings__title">Сохранение данных</div>
      <div class="slr2-page-settings__content">
        Вы внесли изменения, но не сохранили данные. Если вы хотите сохранить
        данные, подтвердите, нажав Сохранить.
      </div>
      <div class="slr2-page-settings__footer">
        <button-cancel></button-cancel>
        <button-save></button-save>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCancel from './ButtonCancel.vue';
import ButtonSave from './ButtonSave.vue';

export default {
  components: {
    ButtonCancel,
    ButtonSave,
  },
};
</script>

<style>
.twpx-zd-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000001a;
  font-size: 16px;
  -webkit-transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  opacity: 0;
  z-index: -1;
}
.slr2-page-settings__body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-40%);
  -webkit-transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 1088px;
  height: 890px;
  max-height: calc(100vh - 40px);
  background-color: #fff;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 100px 1fr 150px;
  z-index: 10;
}

.twpx-zd-modal.slr2-page-settings__-show {
  pointer-events: auto;
  opacity: 1;
}

.twpx-zd-modal.slr2-page-settings__-z {
  z-index: 10000;
}

.twpx-zd-modal.slr2-page-settings__-show .slr2-page-settings__body {
  transform: translateX(-50%) translateY(-50%);
}

.slr2-page-settings__title {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat, 'Arial', sans-serif;
  font-size: 32px;
  color: #232339;
  padding: 0 50px;
  position: relative;
  text-align: center;
}

.slr2-page-settings__content {
  display: flex;
}

.slr2-page-settings__footer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
