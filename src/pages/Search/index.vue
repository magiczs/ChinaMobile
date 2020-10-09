<template>
  <div class="qb">
    <!-- 包裹器 -->
    <div class="parcel">
      <!-- 全部选择 -->
      <div class="selectAll">
        <!-- 开头 -->
        <div class="outset">
          <div>
            <span class="jd">全部</span>
            <span> > </span>
            <span class="cg">小米有品</span>
          </div>
        </div>
        <!-- 主体内容 -->
        <section class="subject">
          <!-- 商品筛选 -->
          <div class="filtrateBox">
            <div class="filtrate">商品筛选：</div>
            <p>
              共搜到
              <span class="amount">536</span>
              款商品
            </p>
          </div>
          <!-- 商品分类 -->
          <div class="classifyBox">
            <div class="classify">商品分类：</div>
            <div class="cfzt">不限</div>
            <div>
              <div>小米有品居家生活用品(317)</div>
              <div>小米有品家电(75)</div>
              <div>小米有品手机数码(59)</div>
              <div>小米有品箱包(21)</div>
              <div>小米有品其它酒品(20)</div>
              <div>小米有品清洁用品(13)</div>
              <div>小米有品居家生活用品(317)</div>
            </div>
            <div></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="less" scoped>
.qb {
  background: #f6f6f6;
  width: 100%;
}

.parcel {
  margin: 0 auto;
  width: 1200px;
  .outset {
    height: 34px;
    padding-top: 12px;
    background: #f6f6f6;
    div {
      height: 34px;
      width: 98px;
      line-height: 34px;
      .jd {
        font-size: 12px;
        font-weight: 700;
        color: #030303;
      }
      .cg {
        font-size: 12px;
        color: #030303;
      }
    }
  }

  .filtrateBox {
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    .filtrate {
      height: 40px;
      width: 100px;
      color: #030303;
      font-weight: 700;
      font-size: 12px;
      line-height: 40px;
      padding-left: 15px;
      float: left;
    }
    p {
      font-size: 12px;
      height: 40px;
      color: #030303;
      line-height: 40px;
      float: left;
      .amount {
        color: #e5008d;
      }
    }
  }

  .classifyBox {
    height: 40px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    .classify {
      height: 40px;
      width: 100px;
      color: #030303;
      font-weight: 700;
      font-size: 12px;
      line-height: 40px;
      padding-left: 15px;
    }
    .cfzt {
      font-size: 12px;
      height: 40px;
      color: #030303;
      line-height: 40px;
    }
  }
}
</style>
