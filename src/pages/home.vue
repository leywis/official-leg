<!--  -->
<template>
  <div class="home-container">
    <!-- banner -->
    <Banner />
    <!-- 亚马逊业务 -->
    <div class="main-block">
      <div class="mian-title">亚马逊跨境电商</div>
      <div class="main-content">
        <div>
          <strong class="main-content_tit">什么是亚马逊跨境电商？</strong>
          <div class="main-content_text">
            <p>
              亚马逊是一个国际性跨境电商平台，平台政策千变万化，尤其在亚马逊的销售旺季，平台政策调整更为频繁。
            </p>
            <p>
              创世商务可为您提供及时的跨境电商相关新闻与动态，助力广大卖家及时了解平台政策变化、知识产权、商标权、关键词优化、运营推广等相关资讯。山西创世商务与您一起分享信息，共享财富！
            </p>
          </div>
        </div>
        <img class="main-pt" src="../assets/images/pt1.png" alt="" />
      </div>
    </div>
    <!-- 亚马逊特色业务 -->
    <div class="main-block main-block_gray">
      <div class="mian-title">核心实力</div>

      <ul class="yw-wrap">
        <li class="am-yw hvr-curl-top-left">
          <strong>亚马逊核心技术</strong>
          <p>
            核心团队具有Amazon运营推广实战操盘10年以上的丰富经验，掌握Amazon核心运营技术，为您快速获取VP验证购买评论
          </p>
        </li>
        <li class="am-yw hvr-curl-top-left">
          <strong>实战技术团队</strong>
          <p>
            创世商务亚马逊服务团队拥有美国、德国、澳大利亚等海外专业商务咨询团队，
            保证您的店铺在当地得到一流专业运作
          </p>
        </li>
        <li class="am-yw hvr-curl-top-left">
          <strong>真人测评服务</strong>
          <p>
            全程模拟真实下单流程，多种形式review形式选择，真实地提升关键词排名，助您提升产品销量、口碑与曝光度，提高产品转化率
          </p>
        </li>
        <li class="am-yw hvr-curl-top-left">
          <strong>分析/市场洞察</strong>
          <p>
            从市场规模、市场趋势、等多个角度深入分析，帮助卖家建立风险意识，洞察市场风险，合理规避预防，完美避免掉坑。
          </p>
        </li>
      </ul>
    </div>
    <div class="line-show">
      <img src="../assets/images/page-1.png" alt="" />
    </div>
    <!-- 工商税务 -->
    <div class="main-block main-block_gray">
      <div class="mian-title">工商税务</div>
      <div class="main-content">
        <img class="main-pt" src="../assets/images/pt1.png" alt="" />
        <div>
          <strong class="main-content_tit"
            >寻找代理记账平台，你是否有以下担忧？</strong
          >
          <div class="main-content_text">
            <p>
              不安全、不专业、流程无管控、信息不可查
            </p>
            <p>加盟式服务，风险层出不穷</p>
            <p>
              无信息化管控，流程不清晰
            </p>
            <p>
              线上交易快，线下管控弱
            </p>
            <p>
              营销能力强，业务不专业
            </p>
            <p>
              ...
            </p>
          </div>
          <div class="mid-tip">代理记账，工商税务，只认创世商务</div>
        </div>
      </div>
    </div>
    <!-- 详细业务 -->
    <div class="main-block">
      <div class="mian-title">我们还提供</div>
      <div class="main-content">
        <ul class="bus-flex">
          <li class="bus-item hvr-outline-in">
            <img src="../assets/images/xg_ico1.png" alt="" />
            <p>注册公司</p>
          </li>
          <li class="bus-item hvr-outline-in">
            <img src="../assets/images/xg_ico2.png" alt="" />
            <p>代理记账</p>
          </li>
          <li class="bus-item hvr-outline-in">
            <img src="../assets/images/xg_ico3.png" alt="" />
            <p>公司核名</p>
          </li>
          <li class="bus-item hvr-outline-in">
            <img src="../assets/images/xg_ico4.png" alt="" />
            <p>资质许可</p>
          </li>
          <li class="bus-item hvr-outline-in">
            <img src="../assets/images/xg_ico5.png" alt="" />
            <p>税务筹划</p>
          </li>
          <li class="bus-item hvr-outline-in">
            <img src="../assets/images/xg_ico6.png" alt="" />
            <p>公司审计</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import Banner from '../components/banner'
import Footer from '../components/footer'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Banner,
    Footer,
  },
  data() {
    //这里存放数据
    return {}
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
}
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
  content: '';
  margin-right: 20px;
}
.mian-title::after {
  width: 200px;
  height: 1px;
  background: #bfbfbf;
  content: '';
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
