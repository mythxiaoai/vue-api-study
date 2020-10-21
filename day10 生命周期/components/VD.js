export default {
  name: "D",
  template: "<span>{{val}}</span>",
  mounted(){
    console.log("v-d mounted");
    this.$emit("wake")
  },
  data() {
    return { val: "我是D组件" };
  }
};
