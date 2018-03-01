new Vue({
	el: '#app',
  data: {
  	title: 'Hello World!',
		link: {
			href: 'http://google.com',
			name: 'Google'
		},
		finishedLink: '<a href="http://www.google.com">Google<a/>'
  },
  methods: {
  	sayHello: function() {
			this.title = 'Hello!'
			return this.title
		}
  }
})
