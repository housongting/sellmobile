<template>
    <div class="d-flex">
        <div class="wrapper2">
            <ul class="content">
                <div v-for="item in arr" :key="item" class="mb-3" style="height:270px;background:green">{{item}}</div>
            </ul>
        </div>
        <div class="wrapper flex-grow-1" style="height:300px;overflow:hidden;">
            <ul class="content">
                <div v-for="item in arr" :key="item" class="mb-3" style="height:270px;background:pink">{{item}}</div>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "test",
  data() {
    return {
      arr: ["1", "2", "3", "4"]
    };
  },
  mounted() {
    new BScroll(document.querySelector(".wrapper"));
    new BScroll(document.querySelector(".wrapper2"));
  }
};
</script>

<style lang="scss" scoped>
.wrapper2 {
  width: 80px;
  height: 300px;
  overflow: hidden;
}
</style>