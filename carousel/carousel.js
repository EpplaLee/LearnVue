
    var vm = new Vue({
        el: '#app',
        data:{
            actived: {
                    class: 'selected'
                    },
            sleeping: {},
            pages: [
                {
                    items: [
                    {
                        name: "化物语",
                        src: "./images/化物语.jpg"
                    },
                    {
                        name: "恋物语",
                        src: "./images/恋物语.jpg"
                    },
                    {
                        name: "凭物语",
                        src: "./images/凭物语.jpg"
                    },
                    {
                        name: "伪物语",
                        src: "./images/伪物语.jpg"
                    }

                ]},
                {
                    items: [
                        {
                            name: "SVD",
                            src: "./images/SVD.jpg"
                        },
                        {
                            name: "FAMAS",
                            src: "./images/FAMAS.jpg"
                        },
                        {
                            name: "HK416",
                            src: "./images/HK416.jpg"
                        },
                        {
                            name: "FNC",
                            src: "./images/FNC.jpg"
                        }
                            
                  ]},
                  {
                      items: [
                          {
                              name: "NTW-20",
                              src: "./images/NTW-20.jpg"
                          },
                          {
                              name: "SV-98",
                              src: "./images/SV-98.jpg"
                          },
                          {
                              name: "蝎式",
                              src: "./images/蝎式.jpg"
                          },
                          {
                              name: "UMP45",
                              src: "./images/UMP45.jpg"
                          }
                      ]},
                      {
                          items: [
                              {
                                  name: "VECTOR",
                                  src: "./images/VECTOR.jpg"
                              },
                              {
                                  name: "WA2000",
                                  src: "./images/WA2000.jpg"
                              },
                              {
                                  name: "春田步枪",
                                  src: "./images/春田步枪.jpg"
                              },
                              {
                                  name: "李·英菲尔德",
                                  src: "./images/李·英菲尔德.jpg"
                              }
                          ]}
            ],
            count: 0,
            itemOnShow:  [
                    {
                        name: "化物语",
                        src: "./images/化物语.jpg"
                    },
                    {
                        name: "恋物语",
                        src: "./images/恋物语.jpg"
                    },
                    {
                        name: "凭物语",
                        src: "./images/凭物语.jpg"
                    },
                    {
                        name: "伪物语",
                        src: "./images/伪物语.jpg"
                    }

                ]

            },
        mounted : function(){
            setInterval(function(){
                console.log(vm.count);
                if(vm.count === 3) vm.count=0;
                else vm.count +=1;
                vm.itemOnShow = vm.pages[vm.count].items;
            },3000);
        },
        methods: {
            turnLeft: function(){
                if(this.count===0) this.count=3;
                else this.count -= 1;
                this.itemOnShow = this.pages[this.count].items;
            },
            turnRight: function(){
                if(this.count===3) this.count=0;
                else this.count += 1;
                this.itemOnShow = this.pages[this.count].items;
            },
            turnPage: function(){
                if(event.target.getAttribute("class")==="s-circle"){
                var pageNum = event.target.getAttribute("id").match(/\d/);
                this.count = parseInt(pageNum);
                this.itemOnShow = this.pages[this.count].items;
                }
  
            }
        }

    })