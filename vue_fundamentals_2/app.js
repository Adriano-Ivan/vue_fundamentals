let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150,
      deg: 30,
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    defined_circle_properties() {
      return {
        width: this.size + "px",
        height: this.size + "px",
        lineHeight: this.size + "px",
        transform: `rotate(${this.deg}deg)`,
      };
    },
  },
}).mount("#app");
