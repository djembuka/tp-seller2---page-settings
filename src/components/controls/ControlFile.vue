<template>
  <div
    class="slr2-page-settings__control"
    :class="{
      'slr2-page-settings__control--invalid': invalid,
      'slr2-page-settings__control--disabled': disabled,
    }"
  >
    <img
      :src="disabled"
      class="slr2-page-settings__control__disabled-icon"
      v-if="disabled"
    />
    <span
      class="slr2-page-settings__control-file__clear"
      @click.prevent="clearInputFile"
      v-if="isClearable"
    ></span>
    <div
      class="slr2-page-settings__control-file"
      :class="{
        filled: isFilled,
        clearable: isClearable,
      }"
      ref="controlFile"
    >
      <span class="slr2-page-settings__control-file__label">{{
        control.label
      }}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.383"
        height="24"
        viewBox="0 0 17.383 24"
        v-html="icon"
      ></svg>

      <input
        type="file"
        :name="control.name"
        :id="control.id"
        @change="uploadFile($refs.inputFile.files)"
        ref="inputFile"
      />
      <label
        :for="control.id"
        class="active"
        v-html="label"
        ref="dropzone"
      ></label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: this.control.disabled,
      loading: false,
      isFileLoaded: false,
      isActive: true,
      files: [],
      icon: `<g transform="translate(-4.461)">
          <g transform="translate(4.461)">
            <g>
              <path d="M21.844,6.573v15.88A1.547,1.547,0,0,1,20.3,24H6.008a1.546,1.546,0,0,1-1.547-1.547V1.547A1.546,1.546,0,0,1,6.008,0H15.27Z" transform="translate(-4.461)" class="a"/>
            </g>
            <path d="M20.036,8.289l5.677,2.339v-2.2l-3.218-.951Z" transform="translate(-8.33 -1.858)" class="b"/>
            <path d="M25.416,6.573H20.389a1.546,1.546,0,0,1-1.547-1.547V0Z" transform="translate(-8.033)" class="c"/>
          </g>
          <path d="M18.117,19.012l-2.85-2.85a.555.555,0,0,0-.785,0l-2.85,2.85a.555.555,0,0,0,.785.784l1.9-1.9v5.024a.555.555,0,1,0,1.109,0V17.894l1.9,1.9a.555.555,0,0,0,.785-.784Z" transform="translate(-1.741 -3.974)" class="d"/>
        </g>`,
    };
  },
  props: ['control', 'variantId'],
  computed: {
    invalid() {
      return !!this.invalidString;
    },
    isClearable() {
      return !!this.filename;
    },
    isFilled() {
      return !!this.filename;
    },
    fileid() {
      return this.control.value;
    },
    invalidString() {
      if (this.files[0] && this.files[0].size && this.files[0].name) {
        if (this.files[0].size >= this.control.maxSize) {
          //this.files = [];
          return `Размер файла превышает ${this.formatSize(
            this.control.maxSize
          )}`;
        }

        const filename = this.files[0].name;
        const lastIndex = filename.lastIndexOf('.');
        const regExp = new RegExp(this.control.ext.join('|'));

        if (!regExp.test(filename.substring(lastIndex + 1).toLowerCase())) {
          //this.files = [];
          return `Прикладывайте файлы ${this.control.ext
            .map((w) => w.toUpperCase())
            .join(', ')}.`;
        }
      }
      return '';
    },
    label() {
      if (this.invalid) {
        return this.invalidString;
      }
      if (this.files[0] && this.files[0].name) {
        return this.files[0].name;
      }
      if (this.control.value) {
        return this.control.value;
      }
      return this.control.default;
    },
    filename() {
      return this.control.value;
    },
  },
  methods: {
    uploadFile(files) {
      this.$store.commit('setControlValue', {
        blockId: this.$store.getters.isEditedBlock.id,
        variantId: this.variantId,
        controlId: this.control.id,
        value: files[0].name,
      });

      this.files = files;
    },
    clearInputFile() {
      this.loading = false;
      this.files = [];
      this.$refs.inputFile.value = '';
      //set value
      this.$store.commit('setControlValue', {
        blockId: this.$store.getters.isEditedBlock.id,
        variantId: this.variantId,
        controlId: this.control.id,
        value: '',
      });
    },
    cancelEvent(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + scrollY,
        left: box.left + scrollX,
      };
    },
    formatSize(length) {
      var i = 0,
        type = ['б', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб'];
      while ((length / 1000) | 0 && i < type.length - 1) {
        length /= 1000;
        i++;
      }
      return parseInt(length) + ' ' + type[i];
    },
  },
  mounted() {
    //drag&drop file
    const dropZone = this.$refs.dropzone;
    const controlFile = this.$refs.controlFile;
    if (!dropZone) {
      return;
    }
    dropZone.addEventListener('drag', this.cancelEvent);
    dropZone.addEventListener('dragstart', this.cancelEvent);
    dropZone.addEventListener('dragend', this.cancelEvent);
    dropZone.addEventListener('dragover', this.cancelEvent);
    dropZone.addEventListener('dragenter', this.cancelEvent);
    dropZone.addEventListener('dragleave', this.cancelEvent);
    dropZone.addEventListener('drop', this.cancelEvent);

    dropZone.addEventListener('dragover', () => {
      controlFile.classList.add('dragover');
    });
    dropZone.addEventListener('dragenter', () => {
      controlFile.classList.add('dragover');
    });
    dropZone.addEventListener('dragleave', (e) => {
      let dx = e.pageX - this.getCoords(dropZone).left;
      let dy = e.pageY - this.getCoords(dropZone).top;
      if (
        dx < 0 ||
        dx > dropZone.clientWidth ||
        dy < 0 ||
        dy > dropZone.clientHeight
      ) {
        controlFile.classList.remove('dragover');
      }
    });

    dropZone.addEventListener('drop', (e) => {
      controlFile.classList.remove('dragover');
      controlFile.classList.add('filled');
      this.uploadFile(e.dataTransfer.files);
    });
  },
};
</script>

<style scoped>
.slr2-page-settings__control {
  position: relative;
  margin-bottom: var(--slr2-gap-middle);
}
.slr2-page-settings__control__disabled-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  pointer-events: none;
  z-index: 10;
}
.slr2-page-settings__control-file label span {
  color: #ea4420;
}

/*File*/
.slr2-page-settings__control-file {
  position: relative;
  margin-bottom: 0;
}
.slr2-page-settings__control-file.deleting {
  pointer-events: none;
}
.slr2-page-settings__control-file svg {
  position: absolute;
  top: 12px;
  left: 16px;
  pointer-events: none;
  z-index: 10;
}
.slr2-page-settings__control-file.deleting svg {
  display: none;
}
.slr2-page-settings__control-file input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -1;
}
.slr2-page-settings__control-file label {
  display: block;
  background-color: #f5f7f8;
  font-size: 14px;
  height: 48px;
  line-height: 48px;
  padding: 0 20px 0 46px;
  border-radius: 3px;
  border: 1px solid #f5f7f8;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
  transition: background-color 0.3s ease, color 0.3s ease,
    border-color 0.3s ease;
}
.slr2-page-settings__control-file.clearable label {
  padding-right: 40px;
}
.slr2-page-settings__control-file label a {
  pointer-events: none;
  -webkit-transition: none;
  transition: none;
  color: #0a16aa;
  text-decoration: none;
}
.slr2-page-settings__control-file label:hover {
  border-color: #2d3142;
}
.slr2-page-settings__control-file .a,
.slr2-page-settings__control-file .b,
.slr2-page-settings__control-file .c,
.slr2-page-settings__control-file .d {
  -webkit-transition: fill 0.3s ease;
  transition: fill 0.3s ease;
}
.slr2-page-settings__control-file .a {
  fill: #7293a0;
}
.slr2-page-settings__control-file .b {
  fill: #3f6676;
}
.slr2-page-settings__control-file .c {
  fill: #bbd1d9;
}
.slr2-page-settings__control-file .d {
  fill: #fff;
}
.slr2-page-settings__control-file:active .a,
.slr2-page-settings__control-file.dragover .a,
.slr2-page-settings__control-file.filled .a {
  fill: #fff;
}
.slr2-page-settings__control-file:active .b,
.slr2-page-settings__control-file.dragover .b,
.slr2-page-settings__control-file.filled .b {
  fill: #a7bde8;
}
.slr2-page-settings__control-file:active .c,
.slr2-page-settings__control-file.dragover .c,
.slr2-page-settings__control-file.filled .c {
  fill: #d0e0ff;
}
.slr2-page-settings__control-file:active .d,
.slr2-page-settings__control-file.dragover .d,
.slr2-page-settings__control-file.filled .d {
  fill: #7293a1;
}
.slr2-page-settings__control-file:active label,
.slr2-page-settings__control-file.dragover label,
.slr2-page-settings__control-file.filled label {
  background-color: #7293a1;
  color: #fff;
}
.slr2-page-settings__control-file:active label a,
.slr2-page-settings__control-file.dragover label a,
.slr2-page-settings__control-file.filled label a,
.slr2-page-settings__control-file:active
  .slr2-page-settings__control-file__label,
.slr2-page-settings__control-file.dragover
  .slr2-page-settings__control-file__label,
.slr2-page-settings__control-file.filled
  .slr2-page-settings__control-file__label {
  color: #fff;
}
/*invalid*/
.slr2-page-settings__control--invalid .a,
.slr2-page-settings__control-file--invalid:active .a {
  fill: #ff0000;
}
.slr2-page-settings__control--invalid .b,
.slr2-page-settings__control-file--invalid:active .b {
  fill: #b10101;
}
.slr2-page-settings__control--invalid .c,
.slr2-page-settings__control-file--invalid:active .c {
  fill: #fcc;
}
.slr2-page-settings__control--invalid .d,
.slr2-page-settings__control-file--invalid:active .d {
  fill: #fff;
}
/*.slr2-page-settings__control--invalid .a,
.slr2-page-settings__control--invalid .b,
.slr2-page-settings__control--invalid:active .a,
.slr2-page-settings__control--invalid:active .b {
  stroke: #ff0000;
}*/
.slr2-page-settings__control--invalid label,
.slr2-page-settings__control--ivalid:active label {
  background-color: #ffeaea;
  color: #ff0000;
  border-color: #e38080;
}
.slr2-page-settings__control--invalid:hover label,
.slr2-page-settings__control--invalid:hover:active label {
  border-color: #ff0000;
}
.slr2-page-settings__control--invalid label a,
.slr2-page-settings__control--invalid:active label a {
  color: #ff0000;
}
.slr2-page-settings__control--disabled .slr2-page-settings__control-file {
  pointer-events: none;
}
.slr2-page-settings__control--disabled label,
.slr2-page-settings__control--disabled:active label {
  color: #00000055;
  pointer-events: none;
  background-color: #f5f7f855;
  border: 1px solid #f5f7f855 !important;
}
.slr2-page-settings__control--disabled label a,
.slr2-page-settings__control--disabled:active label a {
  color: #0a16aa55;
}
.slr2-page-settings__control--disabled svg {
  opacity: 0.3;
}

.slr2-page-settings__control-file__label {
  position: absolute;
  top: 5px;
  left: 46px;
  font-size: 9px;
  color: #2b2b2b;
  pointer-events: none;
  line-height: 1.1;
  z-index: 10;
}
.slr2-page-settings__control--invalid .slr2-page-settings__control-file__label {
  color: #ff0000;
}
.slr2-page-settings__control--disabled
  .slr2-page-settings__control-file__label {
  color: #2d3142;
  opacity: 0.3;
}
.slr2-page-settings__control-file__clear {
  position: absolute;
  top: calc(50% - 8px);
  right: 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: opacity 0.5s ease;
  z-index: 10;
}

.slr2-page-settings__control-file__clear:hover {
  opacity: 0.7;
}

.slr2-page-settings__control-file__clear:before {
  content: '';
  display: block;
  height: 20px;
  border-left: 2px solid #fff;
  transform: rotate(45deg);
  position: absolute;
  top: -2px;
  left: 7px;
  z-index: 10;
}
.slr2-page-settings__control-file__clear:after {
  content: '';
  display: block;
  height: 20px;
  border-left: 2px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  top: -2px;
  left: 7px;
  z-index: 10;
}

.slr2-page-settings__control-file__clear.btn--load-circle {
  position: absolute;
}
.slr2-page-settings__control-file__clear.btn--load-circle:after {
  width: 20px;
  height: 20px;
  top: calc(50% - 10px);
  right: calc(50% - 10px);
  left: auto;
}
.slr2-page-settings__control-file__clear.btn--load-circle:before {
  display: none;
}
</style>
