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
      this.playerHealth = 100
      this.monsterHealth = 100
    },
    stopGame: function() {
      this.gameIsRunning = false
    },
    attack: function() {
      var heroMax = 10
      var heroMin = 3
      var heroDamage = Math.max(Math.floor(Math.random() * heroMax) + 1, heroMin)
      this.monsterHealth -= heroDamage

      if (this.monsterHealth <= 0) {
        alert('You won!')
        this.gameIsRunning = false
        return
      }

      var monsterMax = 12
      var monsterMin = 5
      var monsterDamage = Math.max(Math.floor(Math.random() * monsterMax) + 1, monsterMin)
      this.playerHealth -= monsterDamage

      if (this.playerHealth <= 0) {
        alert('You lost!')
        this.gameIsRunning = false
        return
      }

    },
    specialAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    }
  }
})
