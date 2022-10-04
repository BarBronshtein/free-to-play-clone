import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store, { key } from './store/gameStore';
import './assets/styles/styles.scss';

const app = createApp(App);
app.use(router);
app.config.globalProperties.$store = store;
app.mount('#app');
