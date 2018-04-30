<template>
  <div class="card">
    <div class="card-header">
      {{ stock.name }}
      <small>(Price: {{ stock.price | toUSD }})</small>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        Total: {{ stock.price * quantity | toUSD }}
        <span v-if="insufficientFunds" class="badge badge-danger" title="Insufficient Funds">!</span>
      </h5>
      <!-- <p class="card-text">TEXT</p> -->
      <div class="form-inline">
        <input type="number" class="form-control" aria-describedby="quantityHelp" placeholder="Quantity" v-model="quantity" :class="{ 'is-invalid': insufficientFunds }" />
        <button type="button" class="btn btn-success" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(parseInt(quantity)) || insufficientFunds">Buy</button>
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
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      },
      insufficientFunds () {
        return this.quantity * this.stock.price > this.funds
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
