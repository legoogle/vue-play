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
    ]
  },
    methods: {
        reversetext: function () {
        this.reverseM = this.reverseM.split('').reverse().join('')
        }
    },
    
    
});

