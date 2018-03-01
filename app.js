new Vue({
	el: '#app',
  data: {
		valid: false,
		name: 'David',
		nameRules: [
      v => !!v || 'Name is required'
    ]
  }
})
