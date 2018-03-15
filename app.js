new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    setGameIsRunning: function() {
      this.gameIsRunning = !this.gameIsRunning
    }
  }
})
