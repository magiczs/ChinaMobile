<template>
  <div>
    <!-- 聚便利  原网页 image  image和p标签-->
    <div class="devicefour">
      <h2 class="h5">聚便利</h2>
      <div class="bottom">
        <div class="left"></div>
        <div class="right">
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
        </div>
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
  name: 'Convenient',
}
</script>

<style lang="less" scoped>
.devicefour {
  width: 1200px;
  height: 654px;
  margin: 40px auto;
}
.devicefour .bottom {
  display: flex;
}
.devicefour .h5 {
  font-size: 26px;
  margin-bottom: 15px;
}
.devicefour .left {
  width: 245px;
  height: 600px;
  background-color: pink;
  border-radius: 10px;
  margin-right: 20px;
}
.devicefour .right {
  width: 920px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
}
.devicefour .right .right-o {
  flex-shrink: 0;
  width: 210px;
  height: 290px;
  background-color: green;
  border-radius: 10px;
  margin: 0 0 20px 20px;
}

.sameimg {
  width: 1200px;
  height: 120px;
  border-radius: 10px;
  background-color: #bfa;
  margin: 40px auto;
}
</style>
