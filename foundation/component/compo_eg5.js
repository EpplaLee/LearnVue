Vue.component('my-input', {
  template: '\
    <div class="form-group">\
      <label>{{ label }}:</label>\
      <input v-bind:value="prologue" v-on:input="onInput">\
    </div>\
  ',
  props: ['prologue', 'label'],

  methods: {
    onInput: function (event) {
      this.$emit('input', event.target.value)
    }
  },
})
new Vue({
  el: '#v-model-example',
  data: {
    message: 'hello'
  }
})