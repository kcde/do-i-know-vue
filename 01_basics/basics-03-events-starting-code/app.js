const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      text: "",
    };
  },
  methods: {
    setText(e) {
      this.text = "";
    },
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    submit() {
      console.log(45);
    },
  },

  computed: {
    // computed properties are like method
    // but vue keeps track of the depencies and only run them when any of the dependencies changes

    fullName() {
      if (!this.text) return;
      return `${this.text} another text`;
    },
  },
  watch: {
    //a watcher is used to watch for changes of a value
    // we use the name of the value as a function
    text(value, oldValue) {
      console.log(value);
    },

    counter(value) {
      if (value > 50) this.counter = 0;
    },
  },
});

app.mount("#events");

//return values from functions and using them in vue causes the fuction to run
//when ever anything changes on our vue app which is not performant
//computed properties over methods
