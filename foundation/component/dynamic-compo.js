var vm = new Vue({
    el: '#app',
    data: {
        currentPosition: 'SomewhereUnkown'
    },
    components: {
        SomewhereUnkown: { template: '<p>My position is uncertain yet_(:3 」∠)_ </p>' },
        home: { template: '<p>Right now I\'m at my home(ﾉ･ω･)ﾉﾞ</p>' },
        company: { template: '<p>I\'m working hard in my company,don\'t bother me(ノ｀Д´)ノ</p>' },
        school: { template: '<p>Yep,I\'m in the school,I\'m learning now!ㄟ( ▔, ▔ )ㄏ</p>' }
    }
})