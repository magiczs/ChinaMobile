<template>
  <div class="detail-wrap">
    <div class="detail-container">
      <!-- 详情页nav导航栏（面包屑） -->
      <div class="nav">
        <a href="javascript:;">首页</a>
        <span>></span>
        <span>手机数码</span>
      </div>

      <!-- 商品详情区域 -->
      <div class="product-intro">
        <!-- 左侧放大镜 -->
        <div class="left">
          <div class="img-left">
            <!-- 预览图 -->
            <img
              src="https://jf-asset2.10086.cn/pic/ware/5ec883/c/5ec883c3d5f19b2f93adc8d7.jpg"
              alt=""
            />
            <div class="mask"></div>

            <!-- 大图 -->
            <div class="bigImg" style="display:none">
              <img
                src="https://jf-asset2.10086.cn/pic/ware/5ec883/c/5ec883c3d5f19b2f93adc8d7.jpg"
                alt=""
              />
            </div>
          </div>

          <!-- zoom -->
          <div class="swiper-container zoom">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="https://jf-asset2.10086.cn/pic/ware/5ec883/c/5ec883c3d5f19b2f93adc8d7.jpg"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="https://jf-asset2.10086.cn/pic/ware/5ec883/c/5ec883c3d5f19b2f93adc8d7.jpg"
                  alt=""
                />
              </div>
              <div class="swiper-slide">
                <img
                  src="https://jf-asset2.10086.cn/pic/ware/5ec883/c/5ec883c3d5f19b2f93adc8d7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <!-- 放大镜左部分文字 -->
          <div class="notes">
            图片仅供参考，实际兑换礼品请以实物或者您收到的服务为准
          </div>
          <div class="phoneExchange">
            <div class="exchangeInfo">
              <h5 class="title">手机兑换</h5>
              <p>方式一：打开手机扫一扫【二维码】即可兑换。</p>
              <p>
                方式二：发送短信兑换码DH11014480 到
                10658999，短信兑换仅支持全积分兑换礼品(发送及接收短信免费)。
              </p>
            </div>
            <img class="exchangeImg" src="./images/code.png" alt="" />
          </div>
        </div>

        <!-- 右侧详情 -->
        <div class="right">
          <div class="detailHeader">
            <div class="le">
              <h3>卡斐乐Cafele 苹果11手机壳透明硅胶镜头保护壳闪镀系列</h3>
              <h6>舒适手感 全包设计</h6>
              <div class="text">
                <span>商品编号: </span>
                <span>11014480</span>
                <i class="iconfont icon-fenxiang"></i>
                <span>分享</span>
              </div>
            </div>
            <div class="ri">
              <h5>卡斐乐（Cafele）</h5>
              <div class="remark">
                <p>0%</p>
                <p class="info">累计评价0</p>
              </div>
            </div>
          </div>
          <div class="goodsInfo">
            <div class="l_1">
              <span class="rowTitle">价格</span>
              <div class="num">
                <span class="price">3000 </span>
                <span class="txt">积分 </span>
              </div>
              <img src="./images/gsm.png" alt="" />
              <img src="./images/new.png" alt="" />
            </div>
            <div class="l_2">
              <p class="rowTitle">支付方式</p>
              <span>全积分</span>
            </div>
            <div class="l_3">
              <p class="rowTitle">重要提示</p>
              <span
                >产品如有质量问题或使用咨询，请拨打售后服务热线：18862801300</span
              >
            </div>
          </div>
          <div class="category">
            <div class="categoryItem">
              <div class="title rowTitle">选择样式</div>
              <div class="attrList">
                <span class="params">中国红</span>
                <span class="params">炫亮黑</span>
                <span class="params">暗夜绿</span>
                <span class="params">仲夏紫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "Detail",
  mounted() {
    new Swiper(".swiper-container", {
      loop: false, // 循环模式选项
      slidesPerView: 5,
      slidesPerGroup: 2,
    });
  },
};
</script>

<style lang="less">
.detail-wrap {
  height: 10000px;
  .detail-container {
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
    color: #333;
    .nav {
      height: 35px;
      line-height: 35px;
      font-size: 12px;
      color: #333;
    }
    // 放大镜区域
    .left {
      position: relative;
      width: 400px;
      float: left;
      .img-left {
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
        &:hover .mask {
          display: block;
        }
      }
      .swiper-container {
        width: 400px;
        height: 56px;
        padding-top: 30px;
        .swiper-slide {
          width: 56px;
          height: 56px;
          img {
            width: 56px;
            height: 56px;
          }
        }
      }
      .notes {
        margin: 12px 0 15px;
        color: #999;
      }
      .phoneExchange {
        display: flex;
        line-height: 22px;
        color: #666;
        .exchangeInfo {
          .title {
            color: #030303;
            font-weight: 400;
            margin: 0;
            padding: 0;
          }
          p {
            margin: 0;
            padding: 0;
          }
        }
        .exchangeImg {
          width: 84px;
          height: 84px;
        }
      }
    }

    //右部详情区域
    .right {
      margin-left: 30px;
      color: #030303;
      float: left;
      .detailHeader {
        display: flex;
        .le {
          width: 500px;
          h3 {
            font-size: 20px;
          }
          h6 {
            font-weight: 400;
            margin-top: 10px;
            font-size: 14px;
          }
          .text {
            color: #999;
            margin-top: 10px;
            .icon-fenxiang {
              margin-left: 20px;
              font-size: 15px;
              color: rgb(229, 0, 141);
            }
          }
        }
        .ri {
          width: 240px;
          height: 61px;
          margin-left: 30px;
          color: #333;
          h5 {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 5px;
          }
          .remark {
            display: flex;
            font-size: 16px;
            height: 32px;
            line-height: 32px;
            .info {
              font-size: 12px;
              margin-left: 15px;
              padding-left: 15px;
              display: inline-block;
              height: 32px;
              line-height: 32px;
              border-left: 1px solid #f0f0f0;
            }
          }
        }
      }
      .rowTitle {
        display: inline;
        padding: 0 10px;
        white-space: nowrap;
        color: #999;
        text-align-last: justify;
        width: 48px;
        font-weight: 400;
      }
      .goodsInfo {
        padding: 12px 10px 14px 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        background: #f6f6f6;
        margin: 15px 0;
        border-radius: 4px;
        background-image: url(data:image/png;base64,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);
        background-position: 100% 0;
        background-repeat: no-repeat;
        .l_1 {
          vertical-align: bottom;
          margin-bottom: 12px;
          .num {
            display: inline-block;
            color: #e5008d;
            .price {
              font-size: 24px;
            }
          }
          img {
            height: 12px;
            margin-left: 5px;
          }
        }
        .l_2 {
          margin-bottom: 12px;
          span {
            height: 16px;
            line-height: 16px;
            padding: 0 4px;
            border-radius: 2px;
            color: #fff;
            background: #e5008d;
            font-size: 12px;
          }
        }
        .l_3 {
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
