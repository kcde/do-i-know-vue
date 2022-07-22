const app = Vue.createApp({
  data() {
    return {
      //   box1Active: false,
      box2Active: false,
      box3Active: false,
    };
  },

  methods: {
    selectBox(box) {
      console.log(2);

      if (box === 1) {
        this.box1Active = !this.box1Active;
        return;
      }
      if (box == 2) {
        this.box2Active = !this.box2Active;
        return;
      }
      if (box == 3) {
        this.box3Active = !this.box3Active;
        return;
      }
    },
  },

  computed: {
    box1Active() {
      return { active: this.box1Active };
    },
  },
});

app.mount("#styling");
