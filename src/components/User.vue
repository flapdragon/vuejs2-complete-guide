<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <p>Name is {{ myName }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :myName="myName"
          :resetFn="resetName"
          ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'

  const myNameDefault = 'David'

  export default {
    data: function() {
      return {
        myName: myNameDefault
      }
    },
    methods: {
      changeName() {
        this.myName = 'Abby'
      },
      resetName() {
        console.log('User.vue, resetName')
        this.myName = myNameDefault
      }
    },
    components: {
      appUserDetail: UserDetail,
      appUserEdit: UserEdit
    }
  }
</script>

<style scoped>
  div {
    background-color: lightblue;
  }
</style>
