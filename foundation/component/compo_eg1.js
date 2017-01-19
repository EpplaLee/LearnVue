//全局注册
Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return {
      counter: 0
    };
  }
});


//局部注册 'ask'标签只能在'before-quote'中使用
Vue.component('before-quote',{
  template: '<p>The question is:<ask></ask></p>',
  components: {
    'ask': { template: '<blockquote>Are you my angel?</blockquote>'}

  }
});


new Vue({
  el: '#eg1'
});
