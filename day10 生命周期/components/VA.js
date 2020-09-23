export default {
  name: "a",
  template: "<span>{{val}}</span>",
  data() {
    return { val: "我是A组件" };
  },
  beforeCreate() {
    console.log("A-beforeCreate");
  },
  created() {
    this.val = this.val+"  更新时间:"+new Date().toLocaleString();
    console.log("A-created");
  },
  beforeMount() {
    console.log("A-beforeMount");
  },
  mounted() {
    console.log("A-mounted");
  },
  activated() {
      console.log("A-activated");
  },
  deactivated() {
      console.log("A-deactivated");
  }
};
