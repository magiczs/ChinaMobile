<template>
  <!-- 爱生活  image p p-->
  <div>
    <div class="devicefive">
      <h2 class="h4">{{same.moduleName}}</h2>
      <div class="bottom">
        <div class="left">
          <a :href="same.contents[0].mainTargetUrl">
            <img :src="same.contents[0].mainImageUrl" alt />
          </a>
        </div>
        <div class="middle">
          <div
            class="middle-o"
            v-for="(sameEvery,index) in same.contents[0].floorWareInfo"
            :key="sameEvery.sequenceNum"
          >
            <img :src="sameEvery.wareImageUrl" alt />
            <p>{{sameEvery.title}}</p>
            <p>{{sameEvery.wareIntegralValue}}</p>
          </div>
          <!-- <div class="middle-o"></div>
          <div class="middle-o"></div>
          <div class="middle-o"></div>
          <div class="middle-o"></div>
          <div class="middle-o"></div>-->
        </div>
        <div class="right">
          <a :href="same.contents[0].sideTargetUrl">
            <img :src="same.contents[0].sideImageUrl" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- 相同的图片 -->
    <div class="sameimg">
      <img :src="lImage.contents[0].floorInfo[0].imageUrl" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Same',
  props: ['same', 'lImage'],
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
  background-color: #fff;
  margin: 0 0 20px 20px;
  border-radius: 10px;
}

.devicefive .bottom .left:hover,
.devicefive .bottom .right:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.devicefive .middle .middle-o:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.devicefive .middle .middle-o img {
  width: 160px;
  height: 160px;
  margin: 15px 25px;
}
.devicefive .middle .middle-o p {
  font-size: 13px;
  margin: -10px 5px;
}
.devicefive .middle .middle-o p:last-of-type {
  margin-top: 15px;
  color: #e20007;
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
.sameimg img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
