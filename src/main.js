import { Remarkable } from 'remarkable';
import axios from 'axios';
import infiniteScroll from 'vue-infinite-scroll';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Object.defineProperty(Vue.prototype, 'md', { value: new Remarkable() });
Object.defineProperty(Vue.prototype, 'axios', { value: axios });

Vue.config.productionTip = false;
Vue.use(infiniteScroll);

// Vue.directive('scroll', {
//   inserted(el, binding) {
//     const debounce = (func, wait, immediate) => {
//       let timeout;
//       return (...rest) => {
//         const context = this;
//         const args = rest;
//         const later = () => {
//           timeout = null;
//           if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//       };
//     };
//
//     if (binding.value.debounce) {
//       const d = (evt) => {
//         if (debounce(binding.value.function(evt, el), 500)) {
//           el.removeEventListener('scroll', d);
//         }
//       };
//       el.addEventListener('scroll', d);
//     } else {
//       const f = (evt) => {
//         if (binding.value.function(evt, el)) {
//           el.removeEventListener('scroll', f);
//         }
//       };
//       el.addEventListener('scroll', f);
//     }
//   },
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
