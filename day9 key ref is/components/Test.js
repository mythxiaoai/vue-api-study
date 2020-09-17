export default {
  beforeCreate() {
    console.log("beforeCreate");
    this.fn("beforeCreate");
  },
  created() {
    console.log("created");
    this.fn("created");
  },
  beforeMount() {
    console.log("beforemount");
    this.fn("beforemount");
  },
  mounted() {
    console.log("mounted");
    this.fn("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroy() {
    console.log("destroy");
  },
  template: `<div>
            我是组件内容：全部重新触发，请查看控制台
            <p>触发时间{{new Date().toLocaleString()}}</p>
        </div>`,
  data() {
    return { runs: [] };
  },
  methods: {
    fn(str) {
      this.runs.push(str);
    },
  },
};
