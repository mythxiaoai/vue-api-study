export default {
    name: "va",
    propsData:{
      msg:"我是子组件props的值"
    },
    props:["msg"],
    template: "<span>我是组件A:{{msg}}</span>",
  };
  