<template>
  <div class="container">
    <app-new-quote @quoteAdded="addQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './components/QuoteGrid.vue'
  import NewQuote from './components/NewQuote.vue'

  export default {
    data: function () {
      return {
        quotes: [
          'Default quote'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      addQuote(quote) {
        this.quotes.push(quote)
      },
      deleteQuote(index) {
        console.log(index)
        this.quotes.splice(index, 1)
      }
    },
    components: {
      appQuoteGrid: QuoteGrid,
      appNewQuote: NewQuote
    }
  }
</script>

<style>
</style>
