<template>
  <!-- 品牌旗舰店 原网页都是image-->
  <div class="devicetwo">
    <h2 class="h3">{{brand.moduleName}}</h2>
    <div class="p2">
      <div
        class="p2-inside"
        v-for="(brandEvery,index) in brand.contents"
        :key="brandEvery.sequenceNum"
      >
        <a :href="brandEvery.targetUrl">
          <img :src="brandEvery.imageUrl" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand',
  props: ['brand'],
}
</script>

<style lang="less" scoped>
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
.p2 .p2-inside:hover {
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
.p2 .p2-inside img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}
a {
  display: block;
}
</style>
