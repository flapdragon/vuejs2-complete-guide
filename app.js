new Vue({
	el: '#app',
  data: {
		attachRed: false,
		attachGreen: false,
		attachBlue: false,
		attachTeal: false,
		progress: 0
  },
	methods: {
		incrementProgress: function() {
			this.attachTeal = !this.attachTeal
			if (this.progress < 100) {
				this.progress += 20
			}
			else {
				this.progress = 0
			}
		}
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
