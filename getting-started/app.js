//after importing vue
//to create a vue instance

Vue.createApp({
  //the data option should have a function as a value
  //more like a method
  data() {
    //we should return an object that holds our data
    return {
      goals: [],
      enteredValue: "",
    };
  },
  //methods hold callable functions
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);

      //remember to always use the this keyword whenever referring to a vatlue
    },
  },
}).mount("#app");

// after creating a new vue instance, it needd to be mounted
