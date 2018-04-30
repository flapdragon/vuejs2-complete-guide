<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Portfolio</a></router-link>
        <router-link to="/stocks" activeClass="active" tag="li" class="nav-item"><a class="nav-link">Stocks</a></router-link>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown" :class="{ show: isDropdownOpen }">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="isDropdownOpen" @click="toggleIsDropdownOpen">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{ show: isDropdownOpen }">
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link"><strong>Funds: {{ funds | toUSD }}</strong></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    },
    methods: {
      ...mapActions([
        'randomizeStocks'
      ]),
      endDay () {
        this.randomizeStocks()
      },
      toggleIsDropdownOpen () {
        console.log('toggleIsDropdownOpen')
        this.isDropdownOpen = !this.isDropdownOpen
        console.log(this.isDropdownOpen)
      }
    }
  }
</script>
