export const fruitMixin = {
  data () {
    return {
      fruits: [ 'Apple', 'Banana', 'Mango', 'Melon', 'Durian' ],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  }
}
