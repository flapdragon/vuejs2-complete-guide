new Vue({
	el: '#app',
  data: {
		attachRed: false,
		attachGreen: false,
		attachBlue: false,
		color: 'green'
  },
	methods: {

	},
	computed: {
		divClasses: function() {
			return {
				red: this.attachRed,
				green: !this.attachRed
			}
		}
	}
})
