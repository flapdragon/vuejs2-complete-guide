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
        <hr />
        <button class="btn btn-primary" @click="fetchDataLocal">Get Local Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in usersLocal">
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
        <br /><br />
        <button class="btn btn-primary" @click="fetchDataFirebase">Get Firebase Data</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in usersFirebase">
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
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
        },
        usersLocal: [],
        usersFirebase: []
      }
    },
    methods: {
      submit () {
        if (this.user.username) {
          console.log('$http')
          this.$http.post('', this.user)
            .then(response => {
              console.log(response)
            }, error => {
              console.log(error)
            })

          // New user
          const newUserKey = firebase.database().ref().child('users').push().key
          console.log(newUserKey)
          let updates = {}
          updates['/users/' + newUserKey] = this.user
          firebase.database().ref().update(updates)

          // Update user
          // firebase.database().ref('users/' + newUserKey).set({
          //   username: this.user.username,
          //   email: this.user.email
          // })
        }
      },
      fetchDataLocal () {
        // vue-resource
        this.$http.get('', this.user)
          .then(response => {
            console.log(response)
            return response.json()
          })
          .then(data => {
            console.log(data)
            this.usersLocal = data
          }, error => {
            console.log(error)
          })
      },
      fetchDataFirebase () {
        return firebase.database().ref('/users').once('value')
          .then(snapshot => {
            const result = []
            const data = snapshot.val()
            for (let key in data) {
              result.push(data[key])
            }
            this.usersFirebase = result
          })
      }
    }
  }
</script>

<style>
</style>
