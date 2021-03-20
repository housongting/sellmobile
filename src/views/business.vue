<template>
  <div class="d-flex h-100">
    <!-- 菜单标题 -->
    <div class="detilsTitle">
      <div v-for="(item,index) in goodsMenu" :key="index" :class="['detilsGroup',index == goodsMenuNum ? 'menuselected':'']" @click="clickJump(index)">
        <span class="mr-1">{{item.icon}}</span>{{item.name}}
      </div>
    </div>
    <!-- 菜单详情 -->
    <div class="detilsContent flex-grow-1">
      <div v-for="(item,index) in goodsMenu" :key="index">
        <div class="deiltsFir">{{item.name}}</div>
        <div class="deiltsTwo">
          <div class="d-flex" v-for="(v,i) in item.foods" :key="i" style="position:relative;padding:15px 0;border-bottom:1px solid rgb(243, 246, 246)">
            <img :src="v.image" alt="" class="mr-2">
            <div class="deiltsTwoGroup">
              <p style="color:#000000">{{v.name}}</p>
              <p style="font-size:12px;color:rgb(79, 82, 82)">{{v.description}}</p>
              <p style="font-size:12px;color:rgb(79, 82, 82)">
                <span class="mr-2">月售{{v.sellCount}}份</span>
                <span>好评率{{v.rating}}%</span>
              </p>
              <p>
                <strong class="mr-2" style="color:red">{{v.price}}</strong>
                <small>
                  <del style="font-size:12px">{{v.oldPrice}}</del>
                </small>
              </p>
            </div>
            <div class="addBtn">
              <button class="mr-2 countBtn" @click="count(v,-1)" v-show="v.num>0">-</button>
              {{v.num}}
              <button class="ml-2 countBtn" @click="count(v,1)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { goods } from "../api/api.js"
// import BetterScroll from 'better-scroll'
export default {
  name: "business",
  data () {
    return {
      countNum: 38,
      goodsMenu: this.$store.state.goodsMenu,
      goodsMenuNum: 0,
      heightArr: [
        { key: 0, height: 0 },
        { key: 1, height: 974 },
        { key: 2, height: 1136 },
        { key: 3, height: 1254 },
        { key: 4, height: 1551 },
        { key: 5, height: 1753 },
        { key: 6, height: 1979 },
        { key: 7, height: 2278 },
        { key: 8, height: 2753 },
      ]
    };
  },
  mounted () {
    var that = this;

    var detilsContent = document.getElementsByClassName('detilsContent')[0];
    detilsContent.onscroll = function () {
      var scrollHeight = detilsContent.scrollTop
      if (scrollHeight >= 0 && scrollHeight <= 925) {
        that.goodsMenuNum = 0;
      } else if (scrollHeight > 925 && scrollHeight <= 1054) {
        that.goodsMenuNum = 1;
      } else if (scrollHeight > 1054 && scrollHeight <= 1185) {
        that.goodsMenuNum = 2;
      } else if (scrollHeight > 1185 && scrollHeight <= 1462) {
        that.goodsMenuNum = 3;
      } else if (scrollHeight > 1462 && scrollHeight <= 1636) {
        that.goodsMenuNum = 4;
      } else if (scrollHeight > 1636 && scrollHeight <= 1885) {
        that.goodsMenuNum = 5;
      } else if (scrollHeight > 1885 && scrollHeight <= 2210) {
        that.goodsMenuNum = 6;
      } else if (scrollHeight > 2210 && scrollHeight <= 2680) {
        that.goodsMenuNum = 7;
      } else {
        that.goodsMenuNum = 8;
      }
    }

  },
  created () {
    var id = sessionStorage.getItem("id")
    goods(id).then((res) => {
      var newArr = res.data.data;
      this.$store.commit('setgoodsMenu', newArr)
    }).catch((error) => {
      console.log("Error", error.message);
    })
  },
  methods: {
    count (curNum, val) {
      curNum.num += val;
    },
    clickJump (val) {
      this.goodsMenuNum = val;
      this.scrollHeight(val)
    },
    scrollHeight (val) {
      var detilsContent = document.getElementsByClassName('detilsContent')[0];
      detilsContent.scrollTop = this.heightArr[val].height;
    }
  }
};
</script>

<style lang="scss" scoped>
.countBtn {
  padding: 0px 7px;
  border: 0;
  outline: 0;
}
.menuselected {
  background: #72adf4;
  color: #fff;
}
.detilsTitle {
  width: 100px;
  background: rgb(243, 246, 246);
  padding: 0 8px;
  .detilsGroup {
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
  }
}
.detilsContent {
  overflow: scroll;
  .deiltsFir {
    height: 24px;
    line-height: 24px;
    background: rgb(243, 246, 246);
    padding-left: 12px;
    border-left: 3px solid rgb(217, 222, 224);
    color: rgb(79, 82, 82);
  }
  .deiltsTwo {
    background: #fff;
    padding: 0 15px;
    img {
      height: 60px;
      width: 60px;
      border: 1px solid #ccc;
    }
    .addBtn {
      position: absolute;
      right: 15px;
      bottom: 16px;
    }
  }
}
</style>