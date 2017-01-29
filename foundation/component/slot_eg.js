Vue.component('parent-compo',{
    template: '#parent-compo'
});

Vue.component('child-compo', {
    template: '#child-compo'
});

new Vue({
    el: '#example'
});