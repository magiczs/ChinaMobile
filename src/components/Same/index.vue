<template>
  <!-- 爱生活  image p p-->
  <div>
    <div class="devicefive">
      <h2 class="h4">爱生活</h2>
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
    <!-- 相同的图片 -->
    <div class="sameimg">
      <img src alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Same',
}
</script>

<style lang="less" scoped>
.devicefive {
  width: 1200px;
  height: 654px;
  margin: 40px auto 0;
}
.h4 {
  font-size: 26px;
  margin-bottom: 15px;
}
.devicefive .bottom {
  display: flex;
}
.devicefive .left {
  width: 245px;
  height: 600px;
  background-color: pink;
  border-radius: 10px;
}
.devicefive .middle {
  display: flex;
  width: 710px;
  height: 600px;
  flex-wrap: wrap;
}
.devicefive .middle .middle-o {
  flex-shrink: 0;
  width: 210px;
  height: 290px;
  background-color: yellow;
  margin: 0 0 20px 20px;
  border-radius: 10px;
}
.devicefive .right {
  width: 245px;
  height: 600px;
  background-color: pink;
  border-radius: 10px;
}
.sameimg {
  width: 1200px;
  height: 120px;
  border-radius: 10px;
  background-color: #bfa;
  margin: 40px auto;
}
</style>
