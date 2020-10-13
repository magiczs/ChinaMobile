<template>
  <div>
    <!-- 聚便利  原网页 image  image和p标签-->
    <div class="devicefour">
      <h2 class="h5">{{convenient.moduleName}}</h2>
      <div class="bottom">
        <div class="left">
          <a :href="convenient.contents[0].mainTargetUrl">
            <img v-lazy="convenient.contents[0].mainImageUrl" alt />
          </a>
        </div>
        <div class="right">
          <div class="right-o" v-for="(convenientEvery,index) in convenient.contents[0].floorInfo">
            <a :href="convenientEvery.targetUrl">
              <img v-lazy="convenientEvery.imageUrl" alt />
              <p>{{convenientEvery.title}}</p>
            </a>
          </div>
          <!-- <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>
          <div class="right-o"></div>-->
        </div>
      </div>
    </div>
    <!-- 相同的图片 -->
    <div class="sameimg">
      <img v-lazy="cImage.contents[0].floorInfo[0].imageUrl" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Convenient',
  props: ['convenient', 'cImage'],
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
.devicefour .left:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

.devicefour .left img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
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
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 0 0 20px 20px;
}
.devicefour .right .right-o p {
  text-align: center;
  font-size: 20px;
  color: black;
}
.devicefour .right .right-o:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
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
