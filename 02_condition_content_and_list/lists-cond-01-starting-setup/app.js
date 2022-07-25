const app = Vue.createApp({
  data() {
    return {
      goalInput: "",
      goals: [],
      info: {
        name: "keside",
        learning: "vue",
      },
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalInput);
      this.goalInput = "";
    },
    removeGoal(index) {
      this.goals = this.goals.filter((goal, i) => i !== index);
    },
  },
});

app.mount("#user-goals");
