<template>
  <div
    class="slr2-page-settings__modal"
    :class="{
      'slr2-page-settings__modal--show': show,
      'slr2-page-settings__modal--z': z,
    }"
  >
    <div class="slr2-page-settings__modal-body">
      <div class="slr2-page-settings__modal-title">Сохранение данных</div>
      <div class="slr2-page-settings__modal-content">
        Вы внесли изменения, но не сохранили данные. Если вы хотите сохранить
        данные, подтвердите, нажав Сохранить.
      </div>
      <div class="slr2-page-settings__modal-footer">
        <button-cancel @clickButton="clickButton"></button-cancel>
        <button-save @clickButton="clickButton"></button-save>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCancel from './ButtonCancel.vue';
import ButtonSave from './ButtonSave.vue';

export default {
  data() {
    return {
      z: undefined,
    };
  },
  computed: {
    show() {
      return this.$store.state.alert;
    },
  },
  watch: {
    show(val) {
      if (val) {
        this.z = true;
      } else {
        setTimeout(() => {
          this.z = true;
        }, 500);
      }
    },
  },
  methods: {
    clickButton(type) {
      switch (type) {
        case 'save':
          this.$store.dispatch('saveBlocks'); //send the data of the current step to the server
          break;
        case 'cancel':
          this.$store.dispatch('resetBlocks'); // reset data (blocks order, active variant, settings)
          break;
      }
    },
  },
  components: {
    ButtonCancel,
    ButtonSave,
  },
};
</script>

<style>
.slr2-page-settings__modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #646b7744;
  font-size: 16px;
  -webkit-transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  opacity: 0;
  z-index: -1;
}
.slr2-page-settings__modal-body {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-40%);
  transform: translateX(-50%) translateY(-40%);
  -webkit-transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 535px;
  height: 240px;
  max-height: calc(100vh - 40px);
  background-color: #fff;
  border-radius: 8px;
  padding: calc(var(--slr2-padding) * 2);
  z-index: 10;
}

.slr2-page-settings__modal.slr2-page-settings__modal--show {
  pointer-events: auto;
  opacity: 1;
}

.slr2-page-settings__modal.slr2-page-settings__modal--z {
  z-index: 10000;
}

.slr2-page-settings__modal.slr2-page-settings__modal--show
  .slr2-page-settings__modal-body {
  transform: translateX(-50%) translateY(-50%);
}

.slr2-page-settings__modal-title {
  font-family: Montserrat, 'Arial', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  margin-bottom: var(--slr2-gap-middle);
}

.slr2-page-settings__modal-content {
  font-size: 14.6px;
  line-height: 20px;
  margin-bottom: calc(var(--slr2-gap-middle) * 2);
}

.slr2-page-settings__modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slr2-page-settings__modal-footer .slr2-page-settings__button-cancel {
  width: 175px;
}
.slr2-page-settings__modal-footer .slr2-page-settings__button-save {
  width: 278px;
}
</style>
