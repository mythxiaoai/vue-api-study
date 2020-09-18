export default {
  template: `<span><span>执行:{{number}}</span></span>`,
  data() {
    return {number:0};
  },
  methods: {
    fn() {
      this.number++;
    },
  },
};
