const app = Vue.createApp({
	data(){
		return{
		goal:'Learn vue here',
		courseGoalA:'This is to finish the project',
		courseGoalB:'This is to not finish the project',
		VuLink : 'https://vuejs.org'
	    };
	},
	methods: {
		outputGoal(){
			const randomNumber = Math.random();
			if(randomNumber<0.5){
				return this.courseGoalB;
			}
			else{
				return this.courseGoalA;
			}
		}
	}
});

app.mount('#user-goal');

