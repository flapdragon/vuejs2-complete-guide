new Vue({
	el: '#app',
  data: {
		show: true,
		eye: 0
  },
	methods: {
		toggleEye: function() {
			this.show = !this.show
			if (this.eye === 0) {
				this.eye = null
			}
			else {
				this.eye = 0
			}
		}
	}
})
