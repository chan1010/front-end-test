import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';
const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.use(store)
	.use(BackToTop)
	.mount('#app');