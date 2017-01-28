Vue.component('my-component',{
    props: ['msg'],
    template: '<p>{{ msg }}</p>'
})

var vm = new Vue({
    el: "#app"
})