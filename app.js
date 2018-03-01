new Vue({
	el: '#app',
  data: {
  	title: 'Hello World!',
		link: {
			href: 'http://google.com',
			name: 'Google'
		}
  },
  methods: {
  	sayHello: function() {
			this.title = 'Hello!'
			return this.title
		}
  }
})
