<template>
  <div class="wm">
    <!-- 头部 -->
    <Header></Header>
    <!-- 三级列表 轮播图 右侧栏 -->
    <div class="second">
      <!-- 三级列表左侧导航栏 -->
      <ListContainer></ListContainer>
      <!-- 轮播图 -->
      <SliderLoop></SliderLoop>
      <!-- 右边栏 -->
      <RightSide></RightSide>
    </div>

    <!-- 长条盒子 -->
    <div class="box"></div>

    <!-- 精品推荐 原网页都是image-->
    <Recommend></Recommend>
    <!-- 品牌旗舰店 原网页都是image-->
    <Brand></Brand>
    <!-- 移动私有 原网页 image  image和p标签 -->
    <Private></Private>

    <!-- 聚便利  原网页 image  image和p标签-->
    <Convenient></Convenient>

    <!-- 爱生活  image p p-->
    <Same></Same>
    <Same></Same>
    <Same></Same>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer/index.vue'
import SliderLoop from '../../components/SliderLoop/index.vue'
import Header from '../../components/Header/index.vue'
import ListContainer from '../../components/ListContainer/index.vue'
import RightSide from '../../components/RightSide/index.vue'
import Recommend from '../../components/Recommend/index.vue'
import Brand from '../../components/Brand/index.vue'
import Private from '../../components/Private/index.vue'
import Convenient from '../../components/Convenient/index.vue'
import Same from '../../components/Same/index.vue'
export default {
  name: 'Home',
  components: {
    Footer,
    SliderLoop,
    Header,
    ListContainer,
    RightSide,
    Recommend,
    Brand,
    Private,
    Convenient,
    Same,
  },
}
</script>

<style lang="less" scoped>
.wm {
  background-color: #f6f6f6;
}

.second {
  width: 1200px;
  margin: 15px auto;
  display: flex;
}

.box {
  width: 1200px;
  height: 50px;
  margin: 40px auto;
  background-color: orange;
  border-radius: 10px;
}
</style>