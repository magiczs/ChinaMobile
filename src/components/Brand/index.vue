<template>
  <!-- 品牌旗舰店 原网页都是image-->
  <div class="devicetwo">
    <h2 class="h3">品牌旗舰店</h2>
    <div class="p2">
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
      <div class="p2-inside"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
}
</script>

<style lang="less" scoped>
// 品牌旗舰店
.devicetwo {
  width: 1212px;
  height: 710px;
  margin: 40px auto 0;
}
.h3 {
  font-size: 26px;
  margin-bottom: 15px;
}
.p2 {
  width: 1212px;
  height: 655px;
  display: flex;
  flex-wrap: wrap;
}
.p2 .p2-inside {
  flex-shrink: 0;
  width: 291px;
  height: 150px;
  background-color: #bfa;
  margin: 0 12px 14px 0;
  border-radius: 10px;
}
</style>
