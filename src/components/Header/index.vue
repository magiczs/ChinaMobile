<template>
  <div>
    <div class="outer">
      <div class="tab-bar">
        <div class="tab-left">
          <a>您好，欢迎访问中国移动积分商城</a>
          <!-- <a class="qdl">请登录</a> -->
          <router-link to="/login" class="pink">请登录</router-link>
        </div>
        <div class="tab-right">
          <div class="one q">
            <a class="sjb">手机版</a>
            <!-- 移动上去才出现的 -->
            <div class="ewm">
              <div class="mask">
                <img src="./images/hejifen.ece7db2.jpg" alt />
              </div>
              <span>积分商城微信公众号</span>
            </div>
            <i class="iconfont icondown"></i>
          </div>

          <div class="one w">
            <i class="iconfont iconshuxian" id="tba"></i>
            <a>客户服务</a>
            <i class="iconfont icondown"></i>
            <i class="iconfont iconshuxian" id="tbb"></i>
            <div class="hc">帮助中心</div>
          </div>
          <div class="two">
            <a>网站导航</a>
            <i class="iconfont icondown"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- 网站标志以及以及二维码区域 -->
    <div id="white">
      <div class="header">
        <a class="logo" title="中国移动积分商城" href="###" target="_blank">
          <img src="./images/logo.fccfc0f.png" alt />
        </a>

        <!-- 搜索栏区域 -->
        <div class="middle" action="###">
          <input type="text" class="searchinput" v-model="keyword" />
          <button type="button" @click="toSearch">
            <i class="iconfont iconsousuo"></i>
          </button>
        </div>
        <div class="ewm">
          <div class="mask">
            <div>
              <img src="./images/hejifen.ece7db2.jpg" alt />
            </div>
          </div>
          <span>积分商城微信公众号</span>
        </div>
      </div>

      <!-- 导航栏 -->
      <div class="nav" v-if="navBar && navBar.contents">
        <div class="nav-l">
          <i class="iconfont iconmenu"></i>
          <span>全部商品分类</span>
          <ListContainer class="aaaa" :cateGoryList="cateGoryList"></ListContainer>
        </div>
        <div class="nav-r" v-for="(navEvery,index) in navBar.contents" :key="navEvery.name">
          <a class="sy" :href="navEvery.targetUrl">{{navEvery.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListContainer from '../../pages/Home/components/ListContainer'
export default {
  name: 'Header',
  components: {
    ListContainer,
  },
  data() {
    return {
      resData: '',
      cateGoryList: [],
      keyword: '',
    }
  },
  mounted() {
    this.getHome(), this.getCateGoryList()
  },
  methods: {
    async getHome() {
      const result = await this.$API.home.home()
      this.resData = result.data
    },
    async getCateGoryList() {
      const result = await this.$API.home.cateGoryList()
      this.cateGoryList = result.data
    },
    toSearch() {
      let location = {
        name: 'search',
        params: {
          keyword: this.keyword || undefined,
        },
      }
      if (this.$router.query) {
        location.query = this.$route.query
      }
      if (this.$route.path !== '/home') {
        this.$router.replace(location)
      } else {
        this.$router.push(location)
      }
    },
  },
  computed: {
    navBar() {
      // console.log(this.resData[1])
      return this.resData[1] || []
    },
  },
}
</script>

<style lang="less" scoped>
.outer {
  margin: 0 auto;
  width: 1200px;
}
.tab-bar .tab-left .pink {
  padding-left: 30px;
  color: #e3007c;
}

.outer .icondown {
  padding-left: 6px;
  line-height: 30px;
  font-size: 10px;
}
.outer .two .icondown {
  padding-right: 9px;
}
.outer .tab-right .iconshuxian {
  font-size: 5px;
  color: #cbccce;
  padding: 0 -20px;
}

.tab-bar {
  display: flex;
  justify-content: space-between;
  height: 30px;
  line-height: 30px;
  width: 1200px;
}
.tab-right {
  display: flex;
}
.tab-right a {
  padding-left: 19px;
}
.tab-right .q .ewm {
  display: none;
}
.tab-right .q {
  position: relative;
  width: 83px;
}
.tab-right .q:hover .ewm {
  display: block;
  position: absolute;
  z-index: 99;
  background-color: #fff;
}

.tab-right a.sjb + .ewm {
  position: absolute;
  top: -26px;
  right: -83px;
}

.tab-right a.sjb + .ewm img {
  height: 92px;
  width: 92px;
  position: absolute;
  z-index: 9999;
  top: 60px;
  right: 98px;
}
.tab-right a.sjb + .mask {
  position: absolute;
  top: 34px;
  right: 20px;
  background-color: #f6f6f6;
}
.tab-right a.sjb + .ewm span {
  font-size: 12px;
  margin: 8px 0 0;
  color: #030303;
  position: absolute;
  top: 140px;
  right: 98px;
  white-space: nowrap;
}
.tab-right .w .icondown {
  margin-left: 6px;
}
.tab-right .w a {
  margin: 0 -5px;
}
.tab-right .w {
  position: relative;
}
.tab-right .w .hc {
  display: none;
}
.tab-right .w #tbb {
  position: absolute;
}
.tab-right .w {
  width: 93px;
}
.tab-right .w:hover .hc {
  display: block;
  width: 87px;
  height: 30px;
  background-color: #fff;
  box-shadow: 0 2px 2px 2px #e6e6e6;
  top: 30px;
  left: 6px;
  position: absolute;
  z-index: 99999;
  text-align: center;
}
.tab-right .iconshuxian {
  display: inline-block;
  padding-right: -15px;
}

#white {
  background-color: #fff;
}
.header {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 120px;
}
.header .mask {
  width: 80px;
  height: 80px;
  background-color: #fff;
  border: 1px solid #666;
  position: absolute;
  top: 20px;
}
.header img {
  margin-top: 30px;
  margin-left: 12px;
  width: 220px;
  height: 36.15px;
}
.header .middle {
  display: flex;
  width: 600px;
  height: 40px;
  padding: 27px 98px;
  position: absolute;
  left: 230px;
}
.header .middle .searchinput {
  outline: none;
  width: 531px;
  height: 40px;
  border: 2px rgb(229, 0, 137) solid;
  border-radius: 25px 0 0 25px;
  padding: 12px 20px;
  box-sizing: border-box;
}
.header .middle .iconsousuo {
  font-size: 25px;
  color: white;
}
.header .middle button {
  background-color: rgb(229, 0, 137);
  width: 61px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 0 25px 25px 0;
}

.header .ewm {
  position: absolute;
  top: -26px;
  right: 80px;
}
.header .ewm img {
  height: 72px;
  width: 72px;
  position: absolute;
  top: -25px;
  right: 6px;
}
.header .mask {
  position: absolute;
  top: 34px;
  right: 20px;
}
.header .ewm span {
  font-size: 12px;
  margin: 8px 0 0;
  color: #030303;
  position: absolute;
  top: 110px;
  right: 6px;
  white-space: nowrap;
}

.nav {
  display: flex;
  width: 1200px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
}
.nav .nav-l {
  width: 200px;
  height: 40px;
  text-align: center;
}

.nav .nav-l span {
  font-size: 16px;
  font-weight: 400;
  color: #000;
}
.nav-r a {
  font-size: 16px;
  display: inline-block;
  padding: 0 10px;
  color: #000;
}
.nav-r a:hover {
  color: #e3007c;
  border-bottom: 1px solid #e3007c;
}
.nav-r {
  margin-left: 20px;
}
.aaaa {
  border-radius: 10px;
  background-color: #fff;
  position: absolute;
  z-index: 99;
  top: 205px;
  text-align: left;
}
</style>
