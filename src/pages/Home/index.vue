<template>
  <div class="wm">
    <div class="outer">
      <!-- 头部导航栏 -->
      <div class="tab-bar">
        <div class="tab-left">
          <a>您好，欢迎访问中国移动积分商城</a>
          <a class="qdl">请登录</a>
        </div>
        <div class="tab-right">
          <div class="one">
            <a>手机版</a>
            <i class="iconfont icondown"></i>
            <span class="line">|</span>
          </div>
          <div class="one">
            <a>客户服务</a>
            <i class="iconfont icondown"></i>
            <span class="line">|</span>
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
          <input type="text" class="searchinput" />
          <button type="button">
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
      <div class="nav">
        <div class="nav-l">
          <i class="iconfont iconmenu"></i>
          <span>全部商品分类</span>
        </div>
        <div class="nav-r">
          <a href="javascript:;">首页</a>
          <a href="javascript:;">我能兑换</a>
          <a href="javascript:;">品牌专区</a>
          <a href="javascript:;">积分权益</a>
          <a href="javascript:;">乐享生活</a>
          <a href="javascript:;">积分互换</a>
        </div>
      </div>
    </div>

    <div class="second">
      <!-- 三级列表左侧导航栏 -->
      <div class="outer">
        <div class="fir">
          <div class="second">
            流量话费
            <div>
              流量话费
              <div>...</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <!-- 右边栏 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.wm {
  background-color: #f6f6f6;
}
.outer {
  margin: 0 auto;
  width: 1200px;
}
.outer .qdl {
  padding-left: 30px;
  color: #e3007c;
}
.outer .icondown {
  padding-left: 6px;
  line-height: 30px;
}
.outer .line {
  padding: 0 15px;
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
//white
#white {
  background-color: #fff;
  position: relative;
}
.header {
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
  left: 418px;
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
  right: 220px;
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
//导航栏
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
</style>
