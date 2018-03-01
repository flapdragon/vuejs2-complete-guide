new Vue({
	el: '#app',
  data: {
		counter: 0,
		secondCounter: 0,
		result_icon: ''
  },
	computed: {
		output: function() {
			this.result_icon = this.counter > 5 ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
			return this.counter > 5 ? '> 5' : '< 5'
		}
	},
	watch: {
		counter: function(value) {
			var vm = this
			setTimeout(function() {
				vm.counter = 0
			}, 3000)
		}
	},
	methods: {
		result: function() {
			this.result_icon = this.counter > 5 ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
			return this.counter > 5 ? '> 5' : '< 5'
		}
	}
})
