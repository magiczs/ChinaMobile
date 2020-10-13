<template>
  <div class="img-left">
    <!-- 预览图 -->
    <img :src="defaultImg" alt="" />
    <div ref="mask" class="mask"></div>
    <div class="event" @mousemove="move"></div>

    <!-- 大图 -->
    <div class="bigImg">
      <img ref="bigImg" :src="defaultImg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  props: ["defaultImg"],
  methods: {
    //放大镜效果
    move(event) {
      let bigImg = this.$refs.bigImg;
      let mask = this.$refs.mask;
      let mouseX = event.offsetX;
      let mouseY = event.offsetY;
      let maskX = mouseX - mask.offsetWidth / 2;
      let maskY = mouseY - mask.offsetHeight / 2;

      if (maskX < 0) {
        maskX = 0;
      } else if (maskX > mask.offsetWidth) {
        maskX = mask.offsetWidth;
      }

      if (maskY < 0) {
        maskY = 0;
      } else if (maskY > mask.offsetHeight) {
        maskY = mask.offsetHeight;
      }

      mask.style.left = maskX + "px";
      mask.style.top = maskY + "px";
      bigImg.style.left = -2 * maskX + "px";
      bigImg.style.top = -2 * maskY + "px";
    },
  },
};
</script>

<style lang="less" scoped>
.img-left {
  position: relative;
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    display: none;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 98;
  }
  .bigImg {
    display: none;
    position: absolute;
    width: 400px;
    height: 400px;
    z-index: 1;
    left: 400px;
    top: 0;
    overflow: hidden;
    img {
      position: absolute;
      width: 800px;
      height: 800px;
      left: 0;
      top: 0;
    }
  }
  &:hover .mask,
  &:hover .bigImg {
    display: block;
  }
}
</style>
