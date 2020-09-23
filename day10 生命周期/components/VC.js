export default {
  name: "c",
  template: "<span>{{val}}</span>",
  mounted(){
    throw new Error("666")
  },
  data() {
    return { val: "我是C组件" };
  },
  errorCapture(){
    //不经过这里，本身组件报错向上传递给挂载的父组件上触发父组件的errorCapture
    //但是这里返回false可以阻断阻止错误继续向上传播
    console.log("vc-errorCapture");
    console.log(111111111);
    this.val = "6666"
    //return false;
  }
};
