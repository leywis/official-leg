<template>
  <div class="banner-container">
    <div class="banner-bg" v-bind:style="{ backgroundImage: 'url(' + imgUrl + ')' }">
      <!-- header -->
      <div class="header-wrap">
        <strong class="logo">创世</strong>
        <ul class="header-tabs">
          <li class="link-item" :class="{'active': activeRouteName == 'home'}">
            <a href="/company/index.html#/home">首页</a>
            <a class="p" href="/company/index.html#/home">Home</a>
          </li>
          <li class="link-item" :class="{'active': activeRouteName == 'amazon'}">
            <a href="/company/index.html#/amazon">亚马逊商务</a>
            <a class="p" href="/company/index.html#/amazon">Amazon</a>
          </li>
          <li class="link-item" :class="{'active': activeRouteName == 'business'}">
            <a href="/company/index.html#/business">工商税务</a>
            <a class="p" href="/company/index.html#/business">Business</a>
          </li>
          <li class="link-item" :class="{'active': activeRouteName == 'about'}">
            <a href="/company/index.html#/about">关于我们</a>
            <a class="p" href="/company/index.html#/about">About</a>
          </li>
        </ul>
      </div>
      <!-- banner文案 -->
      <div class="banner-info">
        <div class="banner-info_title">
          <div class="decorate-line dt"></div>
          <div class="decorate-line dr"></div>
          <strong class="company-name">{{ title }}</strong>
          <div class="decorate-line db"></div>
          <div class="decorate-line dl"></div>
        </div>
        <div class="banner-info_desc">{{ tip }}</div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    title: {
      type: String,
      default: "山西创世众创空间",
    },
    tip: {
      type: String,
      default: "一家最具前景和影响力的，集亚马逊跨境商务和工商税务的公司",
    },
    imgUrl: {
      type: String,
      default: "@assets/images/bg1.jpg",
    },
  },
  data() {
    //这里存放数据
    return {
      activeRouteName: "home",
    };
  },
  //监听属性 类似于data概念
  watch: {
    $route: {
      handler: function (route) {
        this.activeRouteName = route.name;
      },
      immediate: true,
    },
  },
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="css" scoped>
.banner-container {
  min-width: 1200px;
}
.banner-bg {
  width: 100%;
  height: 560px;
  background-image: url("../assets/images/bg1.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
}
.header-wrap {
  height: 66px;
  border-bottom: 1px solid #ffffff24;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}
.logo {
  font-size: 32px;
  font-weight: 700;
}
.header-tabs {
  display: flex;
}
.link-item {
  margin: 0 24px;
  text-align: center;
  cursor: pointer;
}
.link-item > a {
  font-size: 16px;
  font-weight: 500;
}
.link-item > .p {
  font-size: 12px;
  transform: scale(0.9);
  display: block;
}
.header-tabs > .active {
  color: #f39c12;
}
.link-item:hover {
  color: #f39c12;
}
.banner-info {
  text-align: center;
  margin-top: 8%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.banner-info_title {
  color: #f39c12;
  font-size: 48px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
}
.company-name {
  padding: 10px 20px;
  display: block;
}
.decorate-line {
  position: absolute;
  background: #fff;
  transition: all 0.5s ease;
}
.banner-info_title > .dt {
  /* width: calc(100% + 40px); */
  width: 0;
  height: 1px;
  top: 0;
  left: -20px;
}
.banner-info_title > .dr {
  /* height: calc(100% + 40px); */
  height: 0;
  width: 1px;
  right: 0;
  top: -20px;
}
.banner-info_title > .db {
  /* width: calc(100% + 40px); */
  width: 0%;
  height: 1px;
  right: -20px;
  bottom: 0;
}
.banner-info_title > .dl {
  /* height: calc(100% + 40px); */
  height: 0;
  width: 1px;
  left: 0;
  bottom: -20px;
}
.banner-info_title:hover > .dt {
  width: calc(100% + 40px);
}
.banner-info_title:hover > .dr {
  height: calc(100% + 40px);
}
.banner-info_title:hover > .db {
  width: calc(100% + 40px);
}
.banner-info_title:hover > .dl {
  height: calc(100% + 40px);
}
.banner-info_desc {
  color: #fff;
  font-size: 20px;
  margin-top: 48px;
}
</style>
