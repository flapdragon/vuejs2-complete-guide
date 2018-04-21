<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
  import * as firebase from "firebase"

  const config = {
    apiKey: "AIzaSyC2Aq_OUntc9cyT-v7Hma5IRwEdpMRFj0Q",
    authDomain: "vuejs-http-e0ac7.firebaseapp.com",
    databaseURL: "https://vuejs-http-e0ac7.firebaseio.com",
    storageBucket: "vuejs-http-e0ac7.appspot.com"
  }
  firebase.initializeApp(config)
  console.log(firebase)
  // const database = firebase.database()

  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        }
      }
    },
    methods: {
      submit () {
        if (this.user.username) {
          console.log('$http')
          this.$http.post('http://localhost:3000/firebase', this.user)
            .then(response => {
              console.log(response)
            }, error => {
              console.log(error)
            })

          // New user
          // const newUserKey = firebase.database().ref().child('users').push().key
          // console.log(newUserKey)
          // let updates = {}
          // updates['/users/' + newUserKey] = this.user
          // firebase.database().ref().update(updates)

          // Update user
          // firebase.database().ref('users/' + newUserKey).set({
          //   username: this.user.username,
          //   email: this.user.email
          // })
        }
      }
    }
  }
</script>

<style>
</style>
