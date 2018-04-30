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
          <a class="nav-link" href="#">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
  export default {
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    }
  }
</script>
