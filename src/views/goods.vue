<template>
  <div class="goods h-100" style="overflow:auto">
    <div class="goodsHeader" style="border-bottom:1px solid #ccc">
      <div class="d-flex pt-3 pb-3" style="border-bottom:1px solid #ccc">
        <div class="goodsHeader-left flex-grow-1">
          <p>粥品香坊（大运村）</p>
          <p>
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-1" alt="">
            <img src="../../static/starM.png" class="mr-2" alt="">
            <span class="mr-2">（661）</span>月销售690单
          </p>
        </div>
        <div class="goodsHeader-right text-center" style="width:60px">
          <img src="../../static/discount.png" alt="">
          <p>已收藏</p>
        </div>
      </div>
      <div class="d-flex justify-content-around pt-3 pb-3">
        <div class="text-center">
          <p>起送价</p>
          <big>20</big>元
        </div>
        <div class="text-center pr-4 pl-4" style="border-right:1px solid #ccc;border-left:1px solid #ccc;">
          <p>商家配送</p>
          <big>4</big>元
        </div>
        <div class="text-center">
          <p>平均配送时间</p>
          <big>39</big>分钟
        </div>
      </div>
    </div>
    <div style="height:30px;background:#ccc;"></div>
    <!-- 公告与活动 -->
    <div class="ggyhd" style="padding:12px 12px 0 12px;border-bottom:1px solid #ccc">
      <h5 class="mb-2 mt-2">公告与活动</h5>
      <div class="pb-3 pl-3" style="color:red;">
        撒即可大家速度二位维尔科技文科健康沃尔克无人机玩家可适当雷锋精神精神科发少女你问无污染累计额王瑞将非
      </div>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;"><img class="mr-2" src="../../static/decrease.png" alt="">在线支付满28减5，满50减10</p>
    </div>
    <div style="height:30px;background:#ccc;"></div>
    <div style="padding:12px 12px 12px 12px;border-bottom:1px solid #ccc">
      <h5 class="mb-2 mt-2">公告与活动</h5>
      <div class="d-flex">
        <img class="mr-2" src="../../static/logo.jpg" alt="" width="30%">
        <img class="mr-2" src="../../static/logo.jpg" alt="" width="30%">
        <img class="mr-2" src="../../static/logo.jpg" alt="" width="30%">
      </div>
    </div>
    <div style="height:30px;background:#ccc;"></div>

    <div style="padding:12px 12px 0 12px;border-bottom:1px solid #ccc">
      <h5 class="mb-2 mt-2">商家信息</h5>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;">在线支付满28减5，满50减10</p>
      <p class="pl-3 pt-3 pb-3" style="border-top:1px solid #ccc;">营业时间：10:00-20:30</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "goods"
};
</script>

<style lang="scss" scoped>
.goods {
  .goodsHeader {
    padding: 0 12px;
    .goodsHeader-left {
      img {
        width: 12px;
      }
    }
    .goodsHeader-right {
      img {
        width: 20px;
      }
    }
  }
  .ggyhd {
    img {
      width: 20px;
    }
  }
}
</style>