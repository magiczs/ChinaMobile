<template>
  <!-- 精品推荐 原网页都是image-->
  <div class="deviceone">
    <h2 class="h2">{{recommend.moduleName}}</h2>
    <div class="p1">
      <div
        class="p1-inside"
        v-for="(recommendEvery,index) in recommend.contents"
        :key="recommendEvery.sequenceNum"
      >
        <a :href="recommendEvery.targetUrl">
          <img :src="recommendEvery.imageUrl" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: ['recommend'],
}
</script>

<style lang="less" scoped>
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
.p1 .p1-inside:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.p1 .p1-inside img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
a {
  display: block;
}
</style>
