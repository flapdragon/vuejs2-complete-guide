import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/firebase'

new Vue({
  el: '#app',
  render: h => h(App)
})
