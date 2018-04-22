import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:3000/firebase'
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method === 'POST') {
    request.method = 'PUT' // Great to know. Don't think you should ever do this.
  }
  next()
})

new Vue({
  el: '#app',
  render: h => h(App)
})
