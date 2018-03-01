new Vue({
	el: '#app',
  data: {
		counter: 0,
		secondCounter: 0,
		result_icon: ''
  },
	computed: {
		output: function() {
			console.log('computed')
			this.result_icon = this.counter > 5 ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
			return this.counter > 5 ? '> 5' : '< 5'
		}
	},
	methods: {
		result: function() {
			console.log('methods')
			this.result_icon = this.counter > 5 ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
			return this.counter > 5 ? '> 5' : '< 5'
		}
	}
})
