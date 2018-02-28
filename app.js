new Vue({
	el: '#app',
  data: {
  	greeting: 'Hello World!'
  },
  methods: {
  	changeGreeting: function(event) {
      // console.log(event)
      console.log(event.target.value)
      if (event.target.value == '') {
        // console.log('event.target.value == \'\'')
        this.greeting = 'Hello World!'
      }
      else {
        // console.log('else')
        this.greeting = event.target.value
      }
    }
  }
})
