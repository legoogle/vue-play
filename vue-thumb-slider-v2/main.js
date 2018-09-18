new Vue({
  el: "#app",
  data: {
    activeItem: 0,
    images: window._gallery.images,
    thumbs: window._gallery.thumbs
  },
  methods: {
  	next() {
    	if(this.activeItem < this.images.length-1) {
	      this.activeItem++;
      }
    },
    previous() {
    	if(this.activeItem > 0) {
	      this.activeItem--;
      }
    },
    selectItem(index){
    	this.activeItem = index;
    }
  }
})