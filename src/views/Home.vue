<template>
  <div class="home d-flex flex-column">
    <div class="header">
      <div class="headerContain d-flex">
        <img src="../../static/logo.jpg" class="mr-3" alt="" style="height: 70px;border-radius: 4px;">
        <div class="hearderWord">
          <p><img src="../../static/brand.png" class="mr-2" alt="">
            <span>粥品香坊（大运村）</span>
          </p>
          <p>蜂鸟转送/38分钟送达</p>
          <p><img src="../../static/decrease2.png" class="mr-2" alt="">
            <span>在线支付满28减5，满50减10</span>
          </p>
        </div>
        <div class="jumpNum">20个&emsp;&emsp;></div>
      </div>
      <div class="GG d-flex align-items-center">
        <img src="../../static/bulletin.png" alt="" class="mr-2">
        <p>的时候反倒是上岛咖啡卡萨丁拉实打实大杀很大声阿啥都好说的挥洒大华盛顿师</p>
        <span class="ml-1">></span>
      </div>
    </div>
    <div class="businessTitle d-flex justify-content-around align-items-center">
      <span :class="titleFlag == 1 ? 'selected' :''" @click="btn(1)">商品</span>
      <span :class="titleFlag == 2 ? 'selected' :''" @click="btn(2)">评价</span>
      <span :class="titleFlag == 3 ? 'selected' :''" @click="btn(3)">商家</span>
    </div>
    <div class="businessGoods flex-grow-1">
      <router-view> </router-view>
    </div>
    <div class="bottomBar d-flex">
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
  </div>
</template>  

<script>
// import { storeList } from "../api/api.js";
export default {
  name: "home",
  created() {},
  components: {},
  methods: {
    btn(val) {
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
  data() {
    return {
      titleFlag: 1
    };
  }
};
</script>

<style lang="scss" scoped>
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
  .businessGoods {
    overflow: auto;
  }
  .bottomBar {
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