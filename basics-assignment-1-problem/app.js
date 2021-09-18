const app = Vue.createApp({
	data(){
		return {
		name:'Sandesh Menath',
		age: 23,
		link:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4A…jN+DdRq4rrt5/JG8cl4X/B0uwJhJJSN7lAAAAAElFTkSuQmCC',
	};
	},
	methods:{
		randomNumber(){
	      const randomNumber = Math.random()
	      return randomNumber;
		}
	}
});



app.mount('#assignment');