<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ reverseName() }}</p>
    <button @click="resetName">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    myName: {
      type: String,
      required: true
    }
  },
  methods: {
    reverseName() {
      return this.myName.split("").reverse().join("")
    },
    resetName() {
      this.myName = 'David'
      this.$emit('nameWasReset', this.myName)
    }
  }
}
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
