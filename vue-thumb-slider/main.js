Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: "#app",
  data: {
    activeItem: 0,
    totalItems: 8
  },
  methods: {
  	next() {
    	this.activeItem++;
    },
    previous() {
    	this.activeItem--;
    }
  }
})






