import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue} from 'bootstrap-vue'

Vue.use(BootstrapVue)


Vue.config.productionTip = false

// axios.defaults.baseURL = "http://localhost:8888";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
