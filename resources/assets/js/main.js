import Vue from 'vue'
import store from './store/store.js'
import App from './App.vue'

const app = new Vue({
  store,
  el: '#app',
  render: h => h(App)
});