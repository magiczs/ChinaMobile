<template>
  <!-- 移动私有 原网页 image  image和p标签 -->
  <div class="devicethree">
    <h2 class="h4">{{private.moduleName}}</h2>
    <div class="bottom">
      <div class="left">
        <a v-if="private.contents" :href="private.contents[0]?private.contents[0].mainTargetUrl:''">
          <img v-lazy="private.contents[0]?private.contents[0].mainImageUrl:''" alt />
        </a>
      </div>
      <div class="middle">
        <div
          class="middle-o"
          v-for="(privateSmall,index) in private.contents[0].floorInfo"
          :key="privateSmall.sequenceNum"
        >
          <a :href="privateSmall.targetUrl">
            <img v-lazy="privateSmall.imageUrl" alt />
            <p>{{privateSmall.subtitle}}</p>
          </a>
        </div>
      </div>
      <div class="right">
        <a :href="private.contents[0].sideTargetUrl">
          <img v-lazy="private.contents[0].sideImageUrl" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Private',
  props: ['private'],
}
</script>

<style lang="less" scoped>
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
.devicethree .left:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.devicethree .right:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
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
  margin: 0 0 20px 20px;
  background-color: #fff;
  border-radius: 10px;
}
.devicethree .middle .middle-o:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.devicethree .middle .middle-o img {
  width: 160px;
  height: 160px;
  margin: 15px 25px;
}
.devicethree .middle .middle-o p {
  text-align: center;
  font-size: 18px;
}
.devicethree .right {
  width: 245px;
  height: 600px;
  background-color: pink;
  border-radius: 10px;
}
.devicethree .right img {
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
.devicethree .left img {
  border-radius: 10px;
}
a {
  display: block;
}
</style>
