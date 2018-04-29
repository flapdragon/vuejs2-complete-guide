<template>
  <div class="container">
    <div class="row">
      <h1>Stocks</h1>
    </div>
    <div class="row">
      <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue'

  export default {
    data () {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 91.50 },
          { id: 2, name: 'Google', price: 1031.45 },
          { id: 3, name: 'Apple', price: 162.32 },
          { id: 4, name: 'Twitter', price: 29.00 },
          { id: 5, name: 'Amazon', price: 1572.62 },
          { id: 6, name: 'Microsoft', price: 95.82 }
        ]
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>
