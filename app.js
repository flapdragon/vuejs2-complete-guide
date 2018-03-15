new Vue({
	el: '#app',
  data: {
		color: 'gray',
		width: 100
  },
	methods: {

	},
	computed: {
		myStyle: function() {
			return {
				backgroundColor: this.color,
				width: this.width + 'px'
			}
		}
	}
})
