<!--  -->
<template>
  <div class="container">
    <!-- banner -->
    <Banner
      :imgUrl="require('@assets/images/bg3.jpg')"
      title="做代理记账，创世真的不一样"
      tip="8年会计服务经验沉淀，用更多时间让客户满意"
    />
    <!-- 业务模块 -->
    <div class="main-item main-item_grey">
      <div class="mian-title title-left">寻找代理记账平台，你是否有以下担忧？</div>
      <ul class="ask-list">
        <li>只注重营销业务，会计专业知识不扎实，账务老出错！</li>
        <li>业务外包，做账人员非公司员工，导致服务细节不好把控，易出现账务风险。</li>
        <li>只注重网上交易，签单后不管线下服务。投诉无门，客户只能吃哑巴亏。</li>
        <!-- <li>过时管控流程，进度反馈不及时，账务细节无法清晰反查，票据有遗漏风险。</li> -->
      </ul>
      <div class="choose-btn">选择创世 = 走向财富</div>
      <img src="../assets/images/amz-1.png" class="ask-bg" alt />
    </div>
    <!-- 提供资讯 -->
    <div class="main-item">
      <div class="mian-title">选择创世，我们为您提供最专业的服务</div>
      <div class="bus-list">
        <div class="bus-item">
          <div style="background: #ff6205;">代理记账</div>
        </div>
        <div class="bus-item">
          <div style="background: #3e0182;">公司注册</div>
        </div>
        <div class="bus-item">
          <div style="background: #a00168;">公司变更</div>
        </div>
        <div class="bus-item">
          <div style="background: #292729;">审计报告</div>
        </div>
        <div class="bus-item">
          <div style="background: #0713a7;">商标注册</div>
        </div>
        <div class="bus-item">
          <div style="background: #07a74e;">公司注销</div>
        </div>
        <div class="bus-item">
          <div style="background: #ffc00d;">劳务资质</div>
        </div>
        <div class="bus-item">
          <div style="background: #47a202;">汇算清缴</div>
        </div>
        <div class="bus-item">
          <div style="background: #ffaa62;">天猫转让</div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/banner";
import Footer from "../components/footer";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Banner,
    Footer,
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
.main-item {
  min-height: 480px;
  box-sizing: border-box;
  padding: 80px 40px;
  min-width: 1200px;
  position: relative;
}
.main-item_grey {
  background: #cbdae61a;
}
.mian-title {
  font-size: 32px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px;
}
.mian-title::before {
  width: 200px;
  height: 1px;
  background: #bfbfbf;
  content: "";
  margin-right: 20px;
}
.mian-title::after {
  width: 200px;
  height: 1px;
  background: #bfbfbf;
  content: "";
  margin-left: 20px;
}
.ask-bg {
  width: 580px;
  position: absolute;
  bottom: 0;
  left: 0px;
}
.title-left {
  transform: translateX(16%);
}
.ask-list {
  font-size: 18px;
  line-height: 48px;
  margin: 20px auto;
  padding-left: 44%;
  color: #333;
}
.choose-btn {
  background: #f39c12;
  width: 240px;
  text-align: center;
  padding: 16px;
  color: #fff;
  margin-left: 22%;
  font-size: 18px;
  border-radius: 8px;
}
.main-content {
  display: flex;
  max-width: 1000px;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
}
.main-text {
  font-size: 16px;
}

.main-text > p {
  margin: 12px;
  line-height: 28px;
}
.main-img {
  width: 400px;
}
.link-box {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.link-item {
  display: flex;
  align-items: center;
  border: 1px solid #ffc761;
  padding: 12px;
  border-radius: 4px;
  flex-grow: 1;
  margin: 20px;
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 25%;
}
.link-item > .tip {
  color: #ffc761;
  margin-left: 8px;
}
.item-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000000bd;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  left: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  text-align: center;
  font-size: 14px;
}
.link-item:hover > .item-shadow {
  left: 0;
}
.tip-title {
  text-align: center;
  margin: 20px;
  font-size: 16px;
  color: #f39c12;
}
.bus-list {
  width: 600px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
.bus-item {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
}
.bus-item > div {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  /* border: 1px solid #f39c12; */
  /* line-height: 120px; */
  color: #fff;
  font-size: 27px;
  word-wrap: break-word;
  word-break: break-all;
  padding: 20px;
}
</style>