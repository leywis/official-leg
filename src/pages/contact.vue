<!--  -->
<template>
  <div class="about-container">
    <!-- banner -->
    <Banner :imgUrl="require('@assets/images/bg1.jpg')" />
    <!-- 亚马逊业务 -->
    <div class="main-block">
      <div class="mian-title">公司面貌</div>
      <div class="main-content">
        <div>
          <strong class="main-content_tit">公司面貌</strong>
          <div class="main-content_text">
            <p>亚马逊是一个国际性跨境电商平台，平台政策千变万化，尤其在亚马逊的销售旺季，平台政策调整更为频繁。</p>
            <p>创世商务可为您提供及时的跨境电商相关新闻与动态，助力广大卖家及时了解平台政策变化、知识产权、商标权、关键词优化、运营推广等相关资讯。山西创世商务与您一起分享信息，共享财富！</p>
          </div>
        </div>
        <img class="main-pt" src="../assets/images/pt1.png" alt />
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
<style lang="css" scoped>
.main-block {
  padding: 80px 40px;
  min-width: 1200px;
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
.main-content {
  display: flex;
  max-width: 1000px;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
}
.main-pt {
  width: 480px;
}
.main-content_tit {
  font-size: 22px;
  margin-bottom: 28px;
  display: block;
}
.main-content_text {
  font-size: 14px;
  color: #333;
}
.main-content_text > p {
  margin: 12px 0;
}
.main-block_gray {
  background: #cbdae61a;
}
.yw-wrap {
  display: flex;
  justify-content: center;
}
.am-yw {
  max-width: 280px;
  background: #fff;
  border-radius: 4px;
  margin: 0 12px;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: 2px 5px 8px #efefef;
}

.am-yw > strong {
  font-size: 22px;
  color: #000;
}
.am-yw > p {
  font-size: 14px;
  color: #333;
  margin-top: 12px;
}
.line-show {
  width: 100%;
}
.line-show > img {
  display: block;
  width: 100%;
}
.mid-tip {
  font-size: 20px;
  margin-top: 32px;
  font-weight: 500;
}
.bus-flex {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.bus-item {
  border: 1px solid #ffb683;
  border-radius: 4px;
  /* width: 150px; */
  text-align: center;
  padding: 28px 38px;
  margin: 0 12px;
}
.bus-item > img {
  width: 66px;
}
.bus-item > p {
  font-size: 16px;
  color: #000;
  margin-top: 12px;
  width: 100%;
  font-weight: 400;
}
</style>
