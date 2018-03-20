<template>
  <div>
    <p>
      Server Status: {{ status }}
    </p>
    <hr />
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus: function() {
        this.status = 'Normal'
      }
    }
    // render (h) {
    //   return h('div', 'Server Status: ' + this.status)
    // }
    // template: `<div>
    //   Server Status: {{ this.status }}
    // </div>`
  }
</script>

<style></style>
