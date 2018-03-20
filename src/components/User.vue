<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change My Name</button>
    <p>Name is {{ userName }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail :userName="userName"
          :resetFn="resetName"
          :userAge="userAge"
          ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
            :userAge="userAge"
            @ageWasEdited="userAge = $event"
            ></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'

  const userNameDefault = 'David'

  export default {
    data: function() {
      return {
        userName: userNameDefault,
        userAge: 80
      }
    },
    methods: {
      changeName() {
        this.userName = 'Abby'
      },
      resetName() {
        this.userName = userNameDefault
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
