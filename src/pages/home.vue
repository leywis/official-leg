<!--  -->
<template>
  <div class="home-container">
    <!-- banner -->
    <Banner />
  </div>
</template>

<script>
import Banner from "../components/banner";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Banner,
  },
  data() {
    //这里存放数据
    return {};
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang='css' scoped>
</style>