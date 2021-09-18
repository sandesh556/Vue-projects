/*const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);*/

Vue.createApp({

  data(){
    return {goals:[],
      enterValue :''
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enterValue);
      this.enterValue='';
    }
  }

}).mount('#app');