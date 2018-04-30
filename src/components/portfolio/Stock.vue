<template>
  <div class="card">
    <div class="card-header">
      {{ stock.name }}
      <small>(Price: {{ stock.price | toUSD }}) | Quantity: {{ stock.quantity }}</small>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        Total: {{ stock.price * quantity | toUSD }}
        <span v-if="insufficientQuantity" class="badge badge-danger" title="Insufficient Stocks">!</span>
      </h5>
      <!-- <p class="card-text">TEXT</p> -->
      <div class="form-inline">
        <input type="number" class="form-control" aria-describedby="quantityHelp" placeholder="Quantity" v-model="quantity" :class="{ 'is-invalid': insufficientQuantity }" />
        <button type="button" class="btn btn-primary" @click="sellStock" :disabled="quantity <= 0 || !Number.isInteger(parseInt(quantity)) || insufficientQuantity">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: [ "stock" ],
    data () {
      return {
        quantity: 0
      }
    },
    computed: {
      insufficientQuantity () {
        return this.quantity > this.stock.quantity
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
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock () {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
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
