Vue.component('my-component',{
    props: ['items'],
    template: '<p> · {{ items }}</p>'
})

var vm = new Vue({
    el: '#app',
    data:{
        sentences:[
            { text: '我看见你了，就知道我又做梦了。'},
            { text: '我婚礼的时候你一定要来呀，不然没有新娘多尴尬 :)'},
            { text: '三俩旧友，四季好酒。'}
        ]
    }
})