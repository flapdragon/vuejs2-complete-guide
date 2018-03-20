<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ reverseName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    resetFn: {
      type: Function
    },
    userAge: {
      type: Number
    }
  },
  methods: {
    reverseName() {
      return this.userName.split("").reverse().join("")
    },
    resetName() {
      this.userName = 'David'
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age
    })
  }
}
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
