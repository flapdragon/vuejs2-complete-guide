new Vue({
	el: '#app',
  data: {
		counter: 0,
		result_icon: ''
  },
	methods: {
		result: function() {
			this.result_icon = this.counter > 5 ? 'keyboard_arrow_right' : 'keyboard_arrow_left'
			return this.counter > 5 ? '> 5' : '< 5'
		}
	}
})
