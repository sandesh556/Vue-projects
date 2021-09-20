const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName:''
    };
  },
  methods:{
    submitted(){

        alert('Sure?');
    },
    confirmed(){
      return this.confirmName = this.name;
    },
    setName(e){
      this.name=e.target.value;
    },
    add(num){
      return this.counter+=num;
    },
    red(num){
      return this.counter-=num;
    }
  }
});

app.mount('#events');
