<template>
  <div class="swiper-container imgList">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(spuImg, index) in spuImgUrl"
        :key="spuImg"
        @mouseenter="changeIndex(index)"
      >
        <img :class="{ active: bigImgIndex === index }" :src="spuImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgList",
  props: {
    spuImgUrl: Array,
    bigImgIndex: Number,
  },
  methods: {
    changeIndex(index) {
      this.$emit("update:bigImgIndex", index);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  width: 400px;
  height: 56px;
  padding: 30px 0 5px;
  .swiper-slide {
    width: 56px;
    height: 56px;
    img {
      border: 1px solid #fff;
      width: 56px;
      height: 56px;
      cursor: pointer;
      &:hover {
        border: 1px solid #e5008d;
      }
      &.active {
        border: 1px solid #e5008d;
      }
    }
  }
}
</style>
