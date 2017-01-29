    var count = 0;
    var vm = new Vue({
        el: '#app',
        data:{
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


            ]
        },
        computed: {
            count: function(){
                return count;
            }
        },
        mounted : function(){
            setInterval(function(){
                console.log(count);
                if(count === 3) count=0;
                else count +=1;
            },3000);
        }

    })