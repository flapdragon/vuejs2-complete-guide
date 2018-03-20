<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
export default {
  props: {
    userAge: {
      type: Number
    }
  },
  methods: {
    editAge() {
      this.userAge = this.userAge / 2
      this.$emit('ageWasEdited', this.userAge)
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
