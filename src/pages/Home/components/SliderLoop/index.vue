<template>
  <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(lbt,index) in swiperData.contents" :key="lbt.name">
        <img :src="lbt.imageUrl" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'SliderLoop',
  props: ['swiperData'],
  mounted() {
    new Swiper(this.$refs.banner, {
      // oberserve: true,
      // oberservePrents: true,
      loop: true, // 循环模式选项
      autoplay: true, // 自动播放时间
      speed: 2000, // 播放的速度
      pagination: {
        el: '.swiper-pagination',
      }, // 如果需要前进后退按钮

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>

<style lang="less" >
.swiper-container {
  width: 780px;
  height: 560px;
  border-radius: 10px;
}
.swiper-container img {
  width: 780px;
  height: 560px;
}
</style>
