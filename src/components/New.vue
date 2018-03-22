<template>
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">New</button>
    <p>
      {{ counter }}
    </p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        counter: 0
      }
    },
    destroyed() {
      console.log('destroyed')
    }
  }
</script>

<style></style>
