import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  el: '#todoapp',
  router,
  template: '<App/>',
  components: { App }
})
