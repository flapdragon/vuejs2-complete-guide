import Vue from 'vue'
// import App from './App.vue'

// var data = { status: 'Critical' }

var cmp1 = {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }} <button @click="changeStatus">Change</button></p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal'
    }
  }
}

new Vue({
  el: '#app1',
  components: {
    'my-cmp': cmp1
  }
})

new Vue({
  el: '#app2',
  components: {

  }
})
