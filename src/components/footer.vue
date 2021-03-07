<!--  -->
<template>
  <div class="container">
    <div class="contact-wrap">
      <div class="map-wrap">
        <baidu-map
          class="map"
          :center="map.center"
          :zoom="map.zoom"
          @ready="handler"
        >
          <!--缩放-->
          <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
          <!--定位-->
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
          <!--点-->
          <bm-marker
            :position="map.center"
            :dragging="map.dragging"
            animation="BMAP_ANIMATION_DROP"
          >
            <!--提示信息-->
            <bm-info-window :show="map.show"
              >阳光国际商务中心B座14层~</bm-info-window
            >
          </bm-marker>
        </baidu-map>
      </div>
      <div class="flex-right">
        <div class="contact-title">
          <strong>联系我们</strong>
          <p>Contact Us</p>
        </div>
        <div class="contact-line"></div>
        <ul class="contact-list">
          <li>地址：山西省太原市小店区阳光国际商务中心B座14层</li>
          <li>电话：18834713157</li>
        </ul>
      </div>
    </div>
    <div class="copy">山西创世众创空间有限公司</div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      map: {
        center: { lng: 112.567527, lat: 37.831845 },
        zoom: 15,
        show: true,
        dragging: true,
      },
    }
  },
  //方法集合
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
      // 点击事件获取经纬度
      map.addEventListener('click', function(e) {
        console.log(e.point.lng, e.point.lat)
      })
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
}
</script>
<style lang="css" scoped>
.container {
  background: #202020;
  height: 320px;
}
.contact-wrap {
  max-width: 1000px;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.map-wrap {
  width: 500px;
  height: 320px;
  padding: 20px 0;
}
.map {
  width: 500px;
  height: 280px;
}
.copy {
  background: #202020;
  height: 48px;
  text-align: center;
  font-size: 12px;
  line-height: 48px;
  border-top: 1px solid #313131;
  color: #fff;
}
.flex-right {
  flex-grow: 1;
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.contact-title {
  color: #fff;
  text-align: right;
}
.contact-title > strong {
  font-size: 36px;
}
.contact-line {
  width: 340px;
  height: 1px;
  background: #717171;
  margin: 12px 0 28px;
}
.contact-list {
  color: #fff;
}
.contact-list > li {
  margin: 12px 0;
  font-size: 14px;
}
</style>
