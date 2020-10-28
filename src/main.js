import { Remarkable } from 'remarkable';
import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Object.defineProperty(Vue.prototype, 'md', { value: new Remarkable() });
Object.defineProperty(Vue.prototype, 'axios', { value: axios });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
