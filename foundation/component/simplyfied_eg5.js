Vue.component('my-input',{
    template: '\
    <div>\
        <label>{{ msg }}:</label>\
        <input  v-bind:value="value" v-on:input="onInput">\
    </div>',
    props: ['value','msg'],
    methods: {
        onInput: function(event) {
            this.$emit('input', event.target.value);
        }
    }
})

var vm = new Vue({
    el: "#app",
    data: {
        message: "Hello"
    }
})