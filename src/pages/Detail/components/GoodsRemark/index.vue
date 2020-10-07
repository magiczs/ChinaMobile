<template>
  <div class="goodsremark">
    <div class="love">
      <p>好评度</p>
      <p>0%</p>
      <p>0人参与</p>
    </div>
    <div class="split"></div>
    <div class="score">
      <div class="scoreItem">
        <span>商品质量</span>
        <span class="iconList">
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
        </span>
        <span>满意度：0分</span>
      </div>

      <div class="scoreItem">
        <span>物流服务</span>
        <span class="iconList">
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
        </span>
        <span>满意度：0分</span>
      </div>
      <div class="scoreItem">
        <span>客户服务</span>
        <span class="iconList">
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
          <i class="iconfont icon-stared"></i>
        </span>
        <span>满意度：0分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsRemark",
};
</script>

<style lang="less" scoped>
.goodsremark {
  display: flex;
  .love {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    p:nth-child(2) {
      color: #e5008d;
      font-size: 36px;

      // margin-right: 2px solid #eee;
    }
  }
  .split {
    height: 50px;
    margin: 30px;
    border-right: 2px solid #eee;
  }
  .score {
    font-size: 12px;
    color: #030303;
    .scoreItem {
      height: 40px;
      line-height: 40px;
      .iconList {
        margin: 0 50px 0 20px;
        .icon-stared {
          color: #eee;
        }
      }
    }
  }
}
</style>
