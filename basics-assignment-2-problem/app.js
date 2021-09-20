const app = Vue.createApp({
	data(){
		return {
          name:'',
          confirmName:''
		};
	},
	methods:{
		showAlert(){
			confirm('Are you sure');
		},
		showName(e){
			return this.name = e.target.value;
		},
		confirmed(e){
           return this.confirmName = e.target.value;
		}

	}
});


app.mount('#assignment');