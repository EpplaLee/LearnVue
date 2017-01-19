Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    };
  },
  methods: {
    increment: function () {
      this.counter += 1;
      this.$emit('increment');
    }
  },
});
new Vue({
  el: '#eg2',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1;
    }
  }
});
