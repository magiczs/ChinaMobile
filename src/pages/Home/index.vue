<template>
  <div class="wm" v-if="private.contents">
    <Header :navBar="navBar"></Header>
    <div class="second">
      <!-- <ListContainer :cateGoryList="cateGoryList"></ListContainer> -->
      <SliderLoop :swiperData="swiperData" class="bbbb"></SliderLoop>
      <RightSide :rightSideTitle="rightSideTitle" :rightSidePrice="rightSidePrice" :small="small"></RightSide>
    </div>
    <img
      v-if="floor.contents"
      class="box"
      v-lazy="floor.contents[0].floorInfo[0].imageUrl"
      :floor="floor"
    />
    <Recommend :recommend="recommend"></Recommend>
    <Brand :brand="brand"></Brand>
    <Private :private="private"></Private>
    <Convenient :convenient="convenient" :cImage="cImage"></Convenient>
    <Same :same="same" :lImage="lImage"></Same>
    <Same :same="same1" :lImage="xImage"></Same>
    <Same :same="same2" :lImage="pImage"></Same>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../components/Header/index.vue'
import Footer from '../../components/Footer/index.vue'
import SliderLoop from './components/SliderLoop'
// import ListContainer from './components/ListContainer/index.vue'
import RightSide from './components/RightSide/index.vue'
import Recommend from './components/Recommend/index.vue'
import Brand from './components/Brand/index.vue'
import Private from './components/Private/index.vue'
import Convenient from './components/Convenient/index.vue'
import Same from './components/Same/index.vue'

import { home } from '../../api/index.js'

export default {
  name: 'Home',
  components: {
    Footer,
    SliderLoop,
    Header,
    // ListContainer,
    RightSide,
    Recommend,
    Brand,
    Private,
    Convenient,
    Same,
  },
  props: ['navBar'],
  data() {
    return {
      resData: [],
    }
  },
  mounted() {
    this.getHome()
    // this.getCateGoryList()
  },
  methods: {
    async getHome() {
      const result = await this.$API.home.home()
      this.resData = result.data
    },
  },
  computed: {
    small() {
      return this.resData[2] || []
    },
    swiperData() {
      return this.resData[0] || []
    },
    // navBar() {
    //   return this.resData[1] || []
    // },
    rightSideTitle() {
      return this.resData[3] || []
    },
    rightSidePrice() {
      return this.resData[4] || []
    },
    recommend() {
      return this.resData[5] || []
    },
    brand() {
      return this.resData[6] || []
    },
    private() {
      return this.resData[7] || []
    },
    convenient() {
      return this.resData[8] || []
    },
    same() {
      return this.resData[10] || []
    },
    same1() {
      return this.resData[12] || []
    },
    same2() {
      return this.resData[14] || []
    },
    floor() {
      return this.resData[9] || []
    },
    cImage() {
      // console.log(this.resData[11])
      return this.resData[11] || []
    },

    lImage() {
      return this.resData[11] || []
    },
    xImage() {
      return this.resData[13] || []
    },
    pImage() {
      return this.resData[15] || []
    },
  },
}
</script>

<style lang="less" scoped>
.bbbb {
  margin-left: 210px;
}
img.box {
  width: 1200px;
  margin: 30px auto;
  height: 100%;
  display: block;
}
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