<template>
  <!-- footer -->
  <div class="footer">
    <div class="top">
      <div class="one">
        <i class="iconfont iconmenu"></i>
        <h6 class="f-inside">新手上路</h6>
        <div class="content">
          <a>客服密码</a>
          <a>兑换流程</a>
          <a>中国移动手机营业厅</a>
        </div>
      </div>
      <div class="one">
        <i class="iconfont iconpeisong"></i>
        <h6 class="f-inside">配送方式</h6>
        <div class="content">
          <a>送货上门</a>
        </div>
      </div>
      <div class="one">
        <i class="iconfont iconshouhoufuwu"></i>
        <h6 class="f-inside">售后服务</h6>
        <div class="content">
          <a>退换货政策</a>
          <a>礼品三包</a>
          <a>查看订单</a>
        </div>
      </div>
      <div class="one">
        <i class="iconfont iconjifenjihua"></i>
        <h6 class="f-inside">积分计划</h6>
        <div class="content">
          <a>中国移动积分计划</a>
          <a>常见问题</a>
        </div>
      </div>
      <div class="one">
        <i class="iconfont iconkefudianhua"></i>
        <h6 class="f-inside">客服电话</h6>
        <div class="content">
          <span>7x24小时热线</span>
          <a style="font-weight:900; color:black">10086</a>
        </div>
      </div>

      <div class="one">
        <i class="iconfont iconqiepian"></i>
        <h6 class="f-inside">招商公告</h6>
        <div class="content">
          <a>招商公告</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="content">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAFfSURBVDhPpZO7TQNBEIZNRkJCIWR0QA3QgVMCUkogoQdyJDqgC4Rjy6IAHmfZO8w3t/95dnUWASutdm4e//zzuIX98yxm40sx276afdyara/Nhhfb7fezrg3A57Ax+360sro0ezgxu3Iz1+XQuS180jkAkJVsd2dmF64+dYB80bkNoO0wTBAHACiTVUFkXtabAUngJemMACie3aDgG1cTBCAXGZ3s+P48RWgARH05WDIMciDf1VbezmcAyAR13p5BtjlIJBWDGJeC8ku9ampnbwGoRyODMlQJVA+QVY6ASDoxYAI4YOSlSVxNARkw+ZAkNzHmqilgRNYkMqgaCtjuPTFgiXIfcMgAAhV9Fo6YqQQkEPMuiG6/A4BTcj3tz/R1P9bZr3HeTpjW7C2D2KgyzpeJ9CCuw3b8ZxInLyW2LDPxHoSuNm7i3/Qga73GCKh7EHKq+28ANZVuc48E4/YLBoWlBU1QLYgAAAAASUVORK5CYII="
          alt
        />
        <span>联系我们</span>
        <i class="iconfont iconshuxian"></i>
        <span>帮助信息</span>
        <i class="iconfont iconshuxian"></i>
        <span>京ICP备05002571号</span>
        <i class="iconfont iconshuxian"></i>
        <span>中国移动通信版权所有</span>
        <i class="iconfont iconshuxian"></i>
        <span>证照信息</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="less" scoped>
.footer {
  padding-top: 30px;
  border-top: 1px solid #666;
  border-bottom: 1px solid #666;
}
.footer .top {
  width: 1200px;
  height: 158px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
}
.footer .top .one {
  width: 163px;
  height: 96px;
}
.footer .top .one i {
  float: left;
  font-size: 35px;
  color: #e3007c;
  margin-right: 12px;
}
.footer .top .one h6 {
  margin-top: 12px;
  font-weight: bolder;
  font-size: 15px;
  color: black;
}
.footer .top .one .content {
  float: left;
}
.footer .top .one .content a {
  display: block;
  margin: 10px 0;
}
.footer .top .one .content span {
  display: block;
  margin: 10px 0;
}
.footer .top .one .content a:hover {
  color: #e3007c;
}

.footer .bottom {
  box-sizing: border-box;
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  padding-top: 20px;
  position: relative;
}
.footer .bottom .content {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.footer .bottom .content img {
  width: 16px;
  height: 19px;
  vertical-align: middle;
  margin-right: -8px;
}
.footer .bottom .content span {
  padding: 0 10px;
}
.footer .bottom .content span:hover {
  color: #e3007c;
}
.footer .bottom .iconshuxian {
  font-size: 10px;
}
</style>
