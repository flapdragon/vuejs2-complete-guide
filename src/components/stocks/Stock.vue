<template>
  <div class="card">
    <div class="card-header">
      {{ stock.name }}
      <small>(Price: {{ stock.price | toUSD }})</small>
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <!-- <p class="card-text">TEXT</p> -->
      <div class="form-inline">
        <input type="number" class="form-control" aria-describedby="quantityHelp" placeholder="Quantity" v-model="quantity" />
        <button type="button" class="btn btn-success" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(parseInt(quantity))">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [ "stock" ],
    data () {
      return {
        quantity: 0
      }
    },
    filters: {
      'toUSD' (value) {
        if (typeof value !== "number") {
          return value
        }
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2
        })
        return formatter.format(value)
      }
    },
    methods: {
      buyStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: parseInt(this.quantity)
        }
        this.$store.dispatch('buyStock', order)
        this.quantity = 0
      }
    }
  }
</script>

<style  scoped>
.card {
  margin: 10px;
}
.btn {
  margin-left: 10px;
}
</style>
