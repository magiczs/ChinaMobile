<template>
  <!-- 精品推荐 原网页都是image-->
  <div class="deviceone">
    <h2 class="h2">精品推荐</h2>
    <div class="p1">
      <div class="p1-inside"></div>
      <div class="p1-inside"></div>
      <div class="p1-inside"></div>
      <div class="p1-inside"></div>
      <div class="p1-inside"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
}
</script>

<style lang="less" scoped>
// 精品推荐
.deviceone {
  width: 1210px;
  margin: 0 auto;
}
.h2 {
  width: 1200px;
  height: 38.75px;
  font-size: 26px;
  margin: 0 auto 15px;
}
.p1 {
  width: 1210px;
  height: 200px;
  display: flex;
}
.p1 .p1-inside {
  border-radius: 10px;
  width: 231.99px;
  height: 200px;
  background-color: #bfa;
  margin-right: 10px;
}
</style>
