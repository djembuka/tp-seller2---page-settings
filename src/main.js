import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import Store from './store';

const store = createStore(Store);

const app = createApp(App);
app.use(store);
app.mount('#seller2PageSettings');
