import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {ApiService} from "../src/services/api.service";
import {TokenService} from "../src/services/storage.service";

Vue.config.productionTip = false
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
console.log(process.env.VUE_APP_MESSAGE_LIMIT)
if (TokenService.getToken()) {
  ApiService.setHeader()
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
