// 创建组件新方式get
Vue.component('parent-compo',{
    template: '#parent-compo'
});

Vue.component('child-compo', {
    template: '#child-compo'
});

new Vue({
    el: '#example'
});