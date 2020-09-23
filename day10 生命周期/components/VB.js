export default {
  name: "b",
  template: "<span>{{val}}</span>",
  data() {
    return { val: "我是B组件" };
  },
  beforeCreate() {
    console.log("B-beforeCreate");
  },
  created() {
    this.val = this.val+"  更新时间："+new Date().toLocaleString();
    console.log("B-created");
  },
  beforeMount() {
    console.log("B-beforeMount");
  },
  mounted() {
    console.log("B-mounted");
  },
  activated() {
      console.log("B-activated");
  },
  deactivated() {
      console.log("B-deactivated");
  }
};
