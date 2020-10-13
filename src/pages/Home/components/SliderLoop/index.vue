<template>
  <div class="swiper-container" ref="banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(lbt,index) in swiperData.contents" :key="lbt.name">
        <img v-lazy="lbt.imageUrl" alt />
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
  // mounted() {
  //   new Swiper(this.$refs.banner, {
  //     // oberserve: true,
  //     // oberservePrents: true,
  //     loop: true, // 循环模式选项
  //     autoplay: true, // 自动播放时间
  //     speed: 2000, // 播放的速度
  //     direction: 'horizontal',
  //     pagination: {
  //       el: '.swiper-pagination',
  //     }, // 如果需要前进后退按钮

  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //   })
  // },
  watch: {
    // bannerList(newVal,oldVal){

    // }

    swiperData: {
      immediate: true, //immediate立即的意思
      //监视数据如果有了数据就去实例化swiper  但是
      //监视有数据实例化的时候太快了,上面的结构也不一定形成（for）
      // watch + nextTick
      // nextTick 等待页面最近一次的更新完成，会调用它内部的回调函数
      // Vue.nextTick    vm（Vue的实例或者组件对象，就是this）.$nextTick  两个方法你开心就好，效果一样的
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          new Swiper(this.$refs.banner, {
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
    },
  },
}
</script>

<style lang="less" scoped >
img {
  width: 780px;
  height: 560px;
}
</style>
