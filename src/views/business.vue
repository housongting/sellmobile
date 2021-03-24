<template>
  <div class="d-flex" style="height:calc(100% - 400px);overflow:hidden">
    <!-- 菜单标题 -->
    <div class="detilsTitle" ref="detilsTitleds">
      <ul class="content">
        <div v-for="(item,index) in goodsMedils" :key="index" :class="['detilsGroup',flag == index ? 'selected' : '']" @click="selectBtnleft(index)">
          <span class="mr-1">{{item.name}}</span>
        </div>
      </ul>
    </div>
    <div class="wrapper flex-grow-1" ref="wrapper">
      <ul class="content">
        <div v-for="(item,index) in goodsMedils" :key="item.name" class="mb-3" :id="index">
          <div class="deiltsFir">{{item.name}}</div>
          <div class="deiltsTwo">
            <div class="d-flex" v-for="(v,i) in item.foods" :key="i" style="padding:15px 0;border-bottom:1px solid rgb(243, 246, 246)">
              <img :src="v.image" alt="" class="mr-2">
              <div class="deiltsTwoGroup">
                <p style="color:#000000">{{v.name}}</p>
                <p style="font-size:12px;color:rgb(79, 82, 82)">
                  <span>{{v.rating}}%</span>
                </p>
                <p>
                  <strong class="mr-2" style="color:red">{{v.price}}</strong>
                  <small>
                    <del style="font-size:12px">{{v.oldPrice}}</del>
                  </small>
                </p>
              </div>
              <div class="addBtn">
                <span class="mr-2" v-show="v.number>0">-</span>
                {{v.number}}
                <span class="ml-2">+</span>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>

  </div>
</template>

<script>
import { goods } from "../api/api.js";
import BScroll from "better-scroll";

export default {
  name: "business",
  data() {
    return {
      num: 0,
      goodsMedils: [],
      flag: 0
    };
  },
  created() {
    // this.$store.commit("setgoodsMenu", this.goodsMedils);
    goods()
      .then(res => {
        //左侧菜单
        this.goodsMedils = res.data.data;
        // console.log(res.data.data);
      })
      .catch(error => {
        console.log("ERROR", error.msg);
      });
  },
  mounted() {
    var that = this;
    // new BScroll(document.querySelector(".detilsContent"));
    that.scroll2 = new BScroll(that.$refs.wrapper, {
      probeType: 3
    });
    that.scroll = new BScroll(that.$refs.detilsTitleds, {
      click: true
    });
    this.scroll2.on("scroll", ({ y }) => {
      var distance = Math.abs(y);
      this.comresult.forEach((v, i) => {
        if (distance >= v.min && distance < v.max) {
          this.flag = i;
          return;
        }
      });
    });
  },
  methods: {
    selectBtnleft(val) {
      this.flag = val;
      this.scroll2.scrollToElement(document.getElementById(val), 500);
    }
  },
  computed: {
    comresult() {
      var arr = [],
        chushi = 0;
      this.goodsMedils.forEach((v, i) => {
        var eleheught = document.getElementById(i).offsetHeight;
        arr.push({ min: chushi, max: eleheught + chushi, index: i });
        chushi += eleheught;
      });
      return arr;
      // var arrObject = [
      //   { min:  this.goodsMedils.0, max: 830, index: 0 },
      //   { min: 830, max: 1034, index: 1},
      //   { min: 1034, max: 1176, index: 2 },
      //   { min: 1176, max: 1476, index: 3 },
      //   { min: 1476, max: 1697, index: 4},
      //   { min: 1697, max: 1926, index: 5 },
      //   { min: 1926, max: 2245, index: 6},
      //    { min: 2245, max: 2733, index: 7 }
      //    { min: 2733, max: 2900, index: 8 }
      // ];
    }
  }
};
</script>

<style lang="scss" scoped>
.detilsTitle {
  width: 80px;
  background: rgb(243, 246, 246);
  padding: 0 8px;
  .detilsGroup {
    padding: 8px 0;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    &.selected {
      color: rgb(34, 166, 242);
    }
  }
}
.wrapper {
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
      // flex: 1;
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