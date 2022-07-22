//create new vue instance

const app = Vue.createApp({
  //make sure that the data method returns an object
  data() {
    //when we want to refer to data in any part of our code, we need to use the this keyword
    //vue talked all out data values and put's them in a global object which can be gotten from the this keyword
    return {
      courseGoal: "Finish this vue course and become a badass vue developer",
      vueLink: "https://vuejs.org",
    };
  },
  //the methods objects contains functions that can be called by the vue app
  methods: {
    outputGoal() {
      const rand = Math.random();
      if (rand < 0.5) return "Still learning vue";
      return "Vue master";
    },
  },
});

//mount accepts a string which represents a unique selector
app.mount("#user-goal");
