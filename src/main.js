import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'


// 解决移动端点击延迟200ms的问题
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function () {
//     FastClick.attach(document.body);
//   }, false);
// }


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
