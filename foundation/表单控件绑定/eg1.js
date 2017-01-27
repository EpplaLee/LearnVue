var app = new Vue({
  el: "#app",
  data:{
    message1: "",
    message2: "",
    checked: false,
    checkedNames: [],
    picked: "",
    selected1: "",
    selected2: [],
    selected3: "",
    selected4: "",
    list:[
      { text: '我要', value: '你在我身旁'},
      { text: '我要', value: '看着你梳妆'}
    ],
    options:[
      { value:"A", text:"三短一长选最长" },
      { value:"B", text: "三长一短选最短" },
      { value:"C", text: "两长两短就选C" } 
    ]
  }
});
