var sidebar = new Vue({
    el: '#body',
    data: {
        isHidden: false
    },
    methods: {
        toggleSidebar: function() {
            if(this.isHidden) this.isHidden = false;
            else this.isHidden = true;
        }
    }
});