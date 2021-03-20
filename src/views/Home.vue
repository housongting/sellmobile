<template>
  <div class="home d-flex flex-column">
    <div class="header flex-shrink-0">
      <div class="headerContain d-flex">
        <img :src="avatar" class="mr-3" alt="" style="height: 70px;border-radius: 4px;">
        <div class="hearderWord">
          <p><img src="../../static/brand.png" class="mr-2" alt="">
            <span>{{name}}</span>
          </p>
          <p>{{description}}/{{deliveryTime}}分钟送达</p>
          <p><img src="../../static/decrease2.png" class="mr-2" alt="">
            <span>在线支付满28减5，满50减10</span>
          </p>
        </div>
        <div class="jumpNum">{{deliveryPrice}}个&emsp;&emsp;></div>
      </div>
      <div class="GG d-flex align-items-center">
        <img src="../../static/bulletin.png" alt="" class="mr-2">
        <p>{{bulletin}}</p>
        <span class="ml-1">></span>
      </div>
    </div>
    <div class="businessTitle d-flex justify-content-around align-items-center flex-shrink-0">
      <span :class="titleFlag == 1 ? 'selected' :''" @click="btn(1)">商品</span>
      <span :class="titleFlag == 2 ? 'selected' :''" @click="btn(2)">评价</span>
      <span :class="titleFlag == 3 ? 'selected' :''" @click="btn(3)">商家</span>
    </div>
    <!-- 内容容器 -->
    <div class="businessGoods" style="height:calc(100% - 210px);overflow:hidden">
      <router-view> </router-view>
    </div>

    <div class="bottomBar d-flex" @click="isshow=!isshow">
      <div class="flex-grow-1 psPrice align-items-center d-flex justify-content-end">
        <strong class="mr-3">￥0</strong>
        <span class="mr-3">|</span>
        <span class="mr-4">另需配送费￥4元</span>
      </div>
      <div class="qs">￥20起送</div>
      <div class="shopcarbg">
        <img src="../../static/shopcar.png" class="shopcar" alt="">
      </div>
    </div>
    <!-- 弹出来的购物车 -->
    <div class="shopIsshow" v-show="isshow">
      <div class="d-flex align-items-cenetr text-center">
        <p style="width:30%">商品</p>
        <p style="width:25%">单价</p>
        <p style="width:25%">数量</p>
        <p style="width:20%">总价</p>
      </div>
      <div class="shopcount">
        <!-- <div class="d-flex align-items-cenetr text-center">
          <p style="width:30%">25</p>
          <p style="width:25%">sdfsd</p>
          <p style="width:25%">sdfsdrtyrtyrtyf</p>
          <p style="width:20%">sdfsdf</p>
        </div> -->
      </div>
    </div>

  </div>
</template>  

<script>
import { storeList } from "../api/api.js";
export default {
  name: "home",
  data () {
    return {
      isshow: false,
      titleFlag: 1,
      avatar: "",
      name: "",
      bulletin: "",
      description: '',
      deliveryTime: '',
      deliveryPrice: "",
    };
  },
  created () {
    storeList().then((res) => {
      var storeDate = res.data.data
      this.avatar = storeDate.avatar;
      this.name = storeDate.name;
      this.bulletin = storeDate.bulletin;
      this.description = storeDate.description;
      this.deliveryTime = storeDate.deliveryTime;
      this.deliveryPrice = storeDate.deliveryPrice;
      sessionStorage.setItem('id', storeDate.id)
      //console.log(storeDate);
    }).catch(function (error) {
      console.log("Error", error.message);
    });
  },
  components: {},
  methods: {
    btn (val) {
      this.titleFlag = val;
      switch (this.titleFlag) {
        case 1:
          this.$router.push({ path: "/business" });
          break;
        case 2:
          this.$router.push({ path: "/ratings" });
          break;
        case 3:
          this.$router.push({ path: "/goods" });
          break;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.allPrice {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.shopIsshow {
  position: absolute;
  bottom: 45px;
  left: 0;
  width: 100%;
  height: 180px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  overflow: auto;
}
.selected {
  color: red;
}
.home {
  height: 100%;
  .header {
    height: 127px;
    background: rgba(79, 82, 82, 0.6);
    padding: 12px;
    position: relative;
    .headerContain {
      position: relative;
      color: #fff;
      .hearderWord {
        p:first-of-type {
          font-size: 20px;
          img {
            height: 20px;
          }
        }
        p:last-of-type {
          font-size: 14px;
          img {
            height: 14px;
          }
        }
      }
      .jumpNum {
        position: absolute;
        right: 0px;
        bottom: 4px;
        padding: 2px 5px;
        border-radius: 11px;
        background: rgba(65, 58, 47, 0.4);
      }
    }
    .GG {
      position: absolute;
      bottom: 0;
      left: 0px;
      padding: 0 12px 0 6px;
      width: 100%;
      height: 30px;
      color: #fff;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.5);
      img {
        height: 12px;
      }
      p {
        width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .businessTitle {
    height: 36px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  .bottomBar {
    z-index: 999;
    width: 100%;
    height: 46px;
    position: fixed;
    bottom: 0;
    left: 0;
    .shopcarbg {
      padding: 8px;
      background: #2a343c;
      border-radius: 50%;
      position: absolute;
      left: 18px;
      top: -18px;
      .shopcar {
        width: 26px;
      }
    }
    .psPrice {
      background: #131d27;
      strong {
        color: #959a9a;
        font-size: 20px;
      }
      span:first-of-type {
        color: #959a9a;
      }
      span:last-of-type {
        color: #959a9a;
      }
    }
    .qs {
      width: 100px;
      line-height: 46px;
      background: #2a353a;
      color: #959a9a;
      text-align: center;
    }
  }
}
</style>