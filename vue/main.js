Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    header: 'Welcome to Vue World!',
    body: 'This will be the body of the page, love it?',
    directive: 'You loaded this page on ' + new Date().toLocaleString(),
    reverseM: 'Reverse This On Click!',
    twoWayBind: 'This is a two way binding sample',
    visible: true,
    lists: [
      { text: 'List item 1' },
      { text: 'List item 2' },
      { text: 'List item 3' },
      { text: 'List item 4' }
    ],
       itemList: [
      { id: 0, text: 'Test 1' },
      { id: 1, text: 'Test 2' },
      { id: 2, text: 'Test 3' }
    ]
  },
    methods: {
        reversetext: function () {
        this.reverseM = this.reverseM.split('').reverse().join('')
        }
    },
    
    
});






