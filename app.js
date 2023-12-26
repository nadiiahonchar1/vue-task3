const App = {
  data: () => ({
    items: [1, 2, 3, 4, 5, 6, 7],
  }),
  methods: {
    //   stopPropagation(e) {
    //     e.stopPropagation();
    //   },
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(item);
    },
  },
  computed: {
    evenItems(event) {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
};

Vue.createApp(App).mount("#app");
