<template>
  <div class="d-flex">
    <!-- 菜单标题 -->
    <div class="detilsTitle">
      <div v-for="(item,index) in goodsMenu" :key="index" class="detilsGroup">
        <span class="mr-1">{{item.icon}}</span>{{item.goodsMenu}}
      </div>
    </div>
    <!-- 菜单详情 -->
    <div class="detilsContent flex-grow-1">
      <div v-for="(item,index) in goodsMedils" :key="index">
        <div class="deiltsFir">{{item.medils}}</div>
        <div class="deiltsTwo">
          <div class="d-flex" v-for="(v,i) in item.medilsArr" :key="i" style="position:relative;padding:15px 0;border-bottom:1px solid rgb(243, 246, 246)">
            <img :src="v.medilsImg" alt="" class="mr-2">
            <div class="deiltsTwoGroup">
              <p style="color:#000000">{{v.medilsName}}</p>
              <p style="font-size:12px;color:rgb(79, 82, 82)">{{v.jcMedils}}</p>
              <p style="font-size:12px;color:rgb(79, 82, 82)">
                <span class="mr-2">{{v.gg}}</span>
                <span>{{v.hpl}}</span>
              </p>
              <p>
                <strong class="mr-2" style="color:red">{{v.price}}</strong>
                <small>
                  <del style="font-size:12px">{{v.delprice}}</del>
                </small>
              </p>
            </div>
            <div class="addBtn">
              <span class="mr-2">-</span>
              28
              <span class="ml-2">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "business",
  data() {
    return {
      goodsMenu: [
        { goodsMenu: "热销榜", icon: "" },
        { goodsMenu: "单人套餐", icon: "" },
        { goodsMenu: "特色粥品", icon: "" },
        { goodsMenu: "精选热菜", icon: "" },
        { goodsMenu: "爽口凉菜", icon: "" },
        { goodsMenu: "半成品", icon: "" },
        { goodsMenu: "饭类", icon: "" },
        { goodsMenu: "面类", icon: "" }
      ],
      goodsMedils: [
        {
          medils: "热销榜",
          medilsArr: [
            {
              medilsImg: "",
              medilsName: "皮蛋瘦肉粥",
              jcMedils: "咸粥",
              gg: "月售1132份",
              hpl: "好评率100%",
              price: 24,
              delprice: "￥25"
            }
          ]
        },
        {
          medils: "精选热菜",
          medilsArr: [
            {
              medilsImg: "",
              medilsName: "热菜",
              jcMedils: "咸粥",
              gg: "月售1132份",
              hpl: "好评率100%",
              price: 24,
              delprice: "￥25"
            },
            {
              medilsImg: "",
              medilsName: "热菜2",
              jcMedils: "咸粥",
              gg: "月售1132份",
              hpl: "好评率100%",
              price: 24,
              delprice: "￥25"
            }
          ]
        },
        {
          medils: "个人特色套餐",
          medilsArr: [
            {
              medilsImg: "",
              medilsName: "莲子羹",
              jcMedils: "",
              gg: "月售1132份",
              hpl: "好评率100%",
              price: 15,
              delprice: "￥89"
            },
            {
              medilsImg: "",
              medilsName: "莲子羹12",
              jcMedils: "莲子",
              gg: "月售1132份",
              hpl: "好评率100%",
              price: 15,
              delprice: "￥89"
            }
          ]
        }
      ]
    };
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
  }
}
.detilsContent {
   overflow:scroll;
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