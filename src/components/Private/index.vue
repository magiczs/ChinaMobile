<template>
  <!-- 移动私有 原网页 image  image和p标签 -->
  <div class="devicethree">
    <h2 class="h4">移动私有</h2>
    <div class="bottom">
      <div class="left"></div>
      <div class="middle">
        <div class="middle-o"></div>
        <div class="middle-o"></div>
        <div class="middle-o"></div>
        <div class="middle-o"></div>
        <div class="middle-o"></div>
        <div class="middle-o"></div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Private',
}
</script>

<style lang="less" scoped>
// 移动私有
.devicethree {
  width: 1200px;
  height: 654px;
  margin: 40px auto 0;
}
.h4 {
  font-size: 26px;
  margin-bottom: 15px;
}
.devicethree .bottom {
  display: flex;
}
.devicethree .left {
  width: 245px;
  height: 600px;
  background-color: pink;
  border-radius: 10px;
}
.devicethree .middle {
  display: flex;
  width: 710px;
  height: 600px;
  flex-wrap: wrap;
}
.devicethree .middle .middle-o {
  flex-shrink: 0;
  width: 210px;
  height: 290px;
  background-color: yellow;
  margin: 0 0 20px 20px;
  border-radius: 10px;
}
.devicethree .right {
  width: 245px;
  height: 600px;
  background-color: pink;
  border-radius: 10px;
}
</style>
