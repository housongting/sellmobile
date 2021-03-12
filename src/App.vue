<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
.clearfix:after {
  content: "";
  clear: both;
  height: 0;
  overflow: hidden;
  display: block;
}
.clearfix {
  zoom: 1;
}
.float_left {
  float: left;
}
.float_right {
  float: right;
}
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: "微软雅黑", "Helvetica Neue", "Helvetica", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei";
}
</style>
