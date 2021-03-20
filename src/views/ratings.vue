<template>
  <div class="ratings h-100" style="overflow:auto">
    <div class="ratingsFS pt-3 pb-3 d-flex">
      <div class="ratingsFS-left pr-3 pl-3 text-center">
        <strong style="color:#F9A012;font-size:18px">3.9</strong>
        <p>综合评分</p>
        <p style="color:#959a9a;">高于周边商家69.2%</p>
      </div>
      <div class="ratingsFS-right pr-3 pl-3" style="border-left:1px solid #ccc;padding:6px 0">
        <p class="d-flex align-items-center">
          <span class="mr-3">服务态度</span>
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starB.png" class="mr-3" alt="">
          <span style="color:#F9A012;line-height:1;">3.9</span>
        </p>
        <p class="d-flex align-items-center">
          <span class="mr-3">服务态度</span>
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starM.png" class="mr-1" alt="">
          <img src="../../static/starB.png" class="mr-3" alt="">
          <span style="color:#F9A012;line-height:1;">4.0</span>
        </p>
        <p class="d-flex align-items-center">
          <span class="mr-3">送达时间</span>
          <span class="color:#959a9a;">44分钟</span>
        </p>
      </div>
    </div>

    <div style="height:30px;background:#f3f6f6;border:1px solid rgba(0, 0, 0, 0.2);border-right:0;border-left:0"></div>

    <div class="btnDiv">
      <div style="padding:15px 0;border-bottom:1px solid #ccc">
        <Button type="primary" class="mr-2">全部&emsp;57</Button>
        <Button type="warning" class="mr-2">满意&emsp;57</Button>
        <Button type="error" class="mr-2">不满意&emsp;57</Button>
      </div>
      <div style="height:45px;line-height:45px;">
        <img src="../../static/special.png" alt="" class="mr-3"> 只看有内容的评价
      </div>
    </div>

    <div class="ratingsCon" style="padding:0 12px">
      <div class="ratingDiv d-flex" v-for="(v,i) in messageArr" :key="i" style="padding:12px 0;border-bottom:1px solid #ccc">
        <img :src="v.avatar" class="imgCo mr-3" alt="">
        <div class="ratingDivRight flex-grow-1">
          <p class="d-flex justify-content-between">
            <span>{{v.username}}</span>
            <span v-text="getDate(v.rateTime)"></span>
          </p>
          <p class="d-flex align-items-center">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-3" alt="">
            <span>80分钟送达</span>
          </p>
          <p>{{v.text}}</p>
          <div class="d-flex align-content-center flex-wrap">
            <img src="../../static/invoice.png" class="mr-2" alt="">
            <p class="ellipsis mr-2" v-for="(x,y) in v.recommend" :key="y">{{x}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ratings } from "../api/api"
export default {
  name: "ratings",
  data () {
    return {
      messageArr: [],
    };
  },
  created () {
    ratings().then((res) => {
      console.log(res);
      this.messageArr = res.data.data;
    }).catch((error) => {
      console.log("ERROR", error.message);
    })
  },
  methods: {
    getDate (val) {
      let d = new Date(parseInt(val))
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      month = month < 10 ? '0' + month : month
      let day = d.getDate()
      day = day < 10 ? '0' + day : day
      let hour = d.getHours()
      hour = hour < 10 ? '0' + hour : hour
      let minute = d.getMinutes()
      minute = minute < 10 ? '0' + minute : minute
      let second = d.getSeconds()
      second = second < 10 ? '0' + second : second
      d = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
      return d
    }
  }
};
</script>

<style lang="scss" scoped>
.ratings {
  font-size: 12px;
  .ratingsFS-right {
    font-size: 14px;
    p {
      img {
        width: 15px;
      }
    }
  }
  .btnDiv {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 0;
    border-left: 0;
    padding: 0 15px;
  }
  .ratingDiv {
    img {
      width: 14px;
    }
    .imgCo {
      width: 39px;
      height: 29px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    .ellipsis {
      padding: 4px 2px;
      margin-bottom: 4px;
      border: 1px solid #ccc;
      font-size: 12px;
    }
  }
}
</style>
