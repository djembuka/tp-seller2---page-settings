import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import Store from './store.js';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const store = createStore(Store);

const app = createApp(App);
app.use(store);
app.component('VueDatePicker', VueDatePicker);
app.mount('#seller2PageSettings');
