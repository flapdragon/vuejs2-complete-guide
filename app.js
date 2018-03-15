new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true
      this.playHealth = 100
      this.monsterHealth = 100
    },
    stopGame: function() {
      this.gameIsRunning = false
    }
  }
})
