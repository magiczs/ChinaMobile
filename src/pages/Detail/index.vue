<template>
  <div class="detail-wrap">
    <div class="detail-container">
      <!-- 详情页nav导航栏（面包屑） -->
      <div class="nav">
        <a href="javascript:;">首页</a>
        <span>></span>
        <span>{{ detailInfo.wareBigKindName }}</span>
      </div>

      <!-- 商品详情区域 -->
      <div class="product-intro clearfix">
        <!-- 左侧放大镜容器 -->
        <div class="left">
          <!-- 放大镜 -->
          <Zoom :defaultImg="defaultImg" />

          <!-- imgList -->
          <ImgList :spuImgUrl="spuImgUrl" :bigImgIndex.sync="bigImgIndex" />

          <!-- 放大镜左部分文字 -->
          <div class="notes">
            图片仅供参考，实际兑换礼品请以实物或者您收到的服务为准
          </div>
          <div class="phoneExchange">
            <div class="exchangeInfo">
              <h5 class="title">手机兑换</h5>
              <p>方式一：打开手机扫一扫【二维码】即可兑换。</p>
              <p>
                方式二：发送短信兑换码DH{{ detailInfo.skuWareCode }} 到
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
              <h3>{{ detailInfo.wareName }}</h3>
              <h6>{{ detailInfo.wareAlias }}</h6>
              <div class="text">
                <span>商品编号: </span>
                <span>{{ detailInfo.skuWareCode }}</span>
                <i class="iconfont icon-fenxiang"></i>
                <span>分享</span>
              </div>
            </div>
            <div class="ri">
              <h5>{{ detailInfo.wareBrandName }}</h5>
              <div class="remark">
                <p>0%</p>
                <p class="info">累计评价0</p>
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
                    <span>0分</span>
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
                    <span>0分</span>
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
                    <span>0分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="goodsInfo">
            <div class="l_1">
              <span class="rowTitle">价格</span>
              <div class="num">
                <span class="price">{{ detailInfo.marketPrice }} </span>
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
              <span>{{ detailInfo.importantNotice }}</span>
            </div>
          </div>
          <div class="category">
            <div
              class="categoryItem clearfix"
              v-for="(wareSale, index) in wareSaleAttrList"
              :key="wareSale.saleAttrDefinitionCode"
            >
              <div class="title rowTitle">
                {{ wareSale.saleAttrDefinitionName }}
              </div>
              <div class="attrList">
                <span
                  @click="changeType(wareSale.saleAttrValueList, saleAttrValue)"
                  class="params"
                  :class="{ active: saleAttrValue.isChecked === '1' }"
                  v-for="(saleAttrValue, index) in wareSale.saleAttrValueList"
                  :key="index"
                  >{{ saleAttrValue.saleAttrValue }}</span
                >
              </div>
            </div>
          </div>
          <div class="goodsNum">
            <div class="title rowTitle">数量</div>
            <button
              @click="changeSkuNum(skuNum - 1)"
              :class="{ disabled: skuNum < 2 }"
              :disabled="skuNum < 2 ? 'disabled' : false"
            >
              -
            </button>
            <input
              @change="changeSkuNum($event.target.value)"
              type="text"
              :value="skuNum"
            />
            <!-- <input
              @input="changeSkuNum($event.target.value)"
              type="text"
              @change="changeSkuNum($event.target.value)"
              :value="skuNum"
              oninput="value = value.replace(/[^\d]/g, '')"
            /> -->
            <button @click="changeSkuNum(skuNum + 1)">+</button>
          </div>
          <div class="submitContainer">
            <button class="submit" @click="toTrade">立即兑换</button>
          </div>
        </div>
      </div>

      <!-- 同类推荐 -->
      <div class="similarRecommended clearfix">
        <div class="srTitle">
          <p>同类推荐</p>
        </div>
        <div class="srContainer">
          <div
            class="srItem"
            v-for="(sameKindRecWare, index) in sameKindRecWareList"
            :key="sameKindRecWare.itemCode"
          >
            <img class="mainImg" :src="sameKindRecWare.imageUrl" alt="" />
            <div class="srInfo">
              <span class="integralNum">{{
                sameKindRecWare.integralValue
              }}</span>
              <span class="text">积分</span>
              <img class="icon-gsm" src="./images/gsm.png" alt="" />
            </div>
            <div class="detailCont">
              {{ sameKindRecWare.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- 详情大图列表展示区-->
      <div class="goodsIntro">
        <div class="gdInfo">
          <!-- 底部导航栏 -->
          <div class="navInfo">
            <ul>
              <li
                :class="{ active: detailIndex === 0 }"
                @click="changeDetailIndex(0)"
              >
                <span>商品介绍</span>
              </li>
              <li
                :class="{ active: detailIndex === 1 }"
                @click="changeDetailIndex(1)"
              >
                <span>商品评价</span>
              </li>
              <li
                :class="{ active: detailIndex === 2 }"
                @click="changeDetailIndex(2)"
              >
                <span>规格参数</span>
              </li>
              <li
                :class="{ active: detailIndex === 3 }"
                @click="changeDetailIndex(3)"
              >
                <span>证照信息</span>
              </li>
            </ul>
          </div>
          <!-- 底部内容区 -->
          <div class="tabContent">
            <!-- 商品图片列表 -->
            <GoodsImgList v-show="detailIndex === 0" />

            <!-- 商品评价 -->
            <GoodsRemark v-show="detailIndex === 1" />

            <!-- 规格参数 -->
            <Specifications
              v-show="detailIndex === 2"
              :wareNormalAttr="wareNormalAttr"
            />

            <!-- 证件信息 -->
            <div v-show="detailIndex === 3">
              <img
                width="100%"
                src="http://jfwap.10086.cn/group1/M00/00/6D/CgIBEl7HSk-AOgZRAAhAUdKx-l8177.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 底部侧边栏 -->
        <div class="detailAside">
          <div class="goodsTitle">
            <p>同价位商品</p>
          </div>
          <div class="samePriceGoodsList">
            <div
              class="samePriceGoodsItem"
              v-for="(search, index) in searchList"
              :key="search.itemCode"
            >
              <img :src="search.imageUrl" alt="" />
              <p class="info">
                <span class="text">积分</span>
                <span class="num">{{ search.integralValue }}</span>
              </p>
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
import ImgList from "./components/ImgList";
import Zoom from "./components/Zoom";
import GoodsImgList from "./components/GoodsImgList";
import GoodsRemark from "./components/GoodsRemark";
import Specifications from "./components/Specifications";
export default {
  name: "Detail",

  data() {
    return {
      spuId: null,
      detailInfo: {},
      sameKindRecWareList: [],
      searchList: [],
      skuNum: 1,
      bigImgIndex: 0,
      detailIndex: 0,
    };
  },
  created() {
    let spuId = this.$route.query.spuId;
    this.spuId = spuId;
  },
  mounted() {
    this.getDetailInfo(this.spuId);
    this.getRecommend();
  },

  methods: {
    //获取详情数据
    async getDetailInfo(spuId) {
      const result = await this.$API.detail.getDetailPages(spuId);
      if (result.code === 200) {
        this.detailInfo = result.data;
      }
    },

    //获取推荐数据
    async getRecommend() {
      const result = await this.$API.detail.getRecommend();
      if (result.code === 200) {
        this.sameKindRecWareList = result.data.sameKindRecWareList;
        this.searchList = result.data.searchList;
      }
    },

    //修改类型
    changeType(attrValueList, attrValue) {
      attrValueList.forEach((item) => {
        item.isChecked = "0";
      });
      attrValue.isChecked = "1";
      this.$forceUpdate();
    },

    //修改详情区域底部显示内容
    changeDetailIndex(index) {
      this.detailIndex = index;
    },

    //修改商品数量
    changeSkuNum(num) {
      num = Number(num);
      if (num < 1) {
        // this.$nextTick(() => {
        //   this.skuNum = 1;
        //   return;
        // });
        console.log(num, "++");
        if (this.skuNum === 1) {
          this.$forceUpdate();
        } else {
          this.skuNum = 1;
        }
        return;
      }
      this.skuNum = num;
    },

    //去往订单页
    async toTrade() {
      const { spuId } = this.detailInfo;
      sessionStorage.setItem("spuInfo", JSON.stringify(this.detailInfo));
      const location = {
        path: "/trade",
        query: {
          spuId,
          num: this.skuNum,
        },
      };
      this.$router.push(location);
    },
  },

  computed: {
    spuImgUrl() {
      return this.detailInfo.spuImgUrl || [];
    },
    wareNormalAttr() {
      return this.detailInfo.wareNormalAttr || [];
    },
    wareSaleAttrList() {
      return this.detailInfo.wareSaleAttr;
      // if (this.detailInfo.wareSaleAttr) {
      //   let wareSaleAttrList = this.detailInfo.wareSaleAttr;
      //   wareSaleAttrList.forEach((wareSaleAttr) => {
      //     wareSaleAttr.saleAttrValueList.forEach((value) => {
      //       console.log(111);
      //       this.$set(value, "isChecked", false);
      //     });
      //   });
      //   return wareSaleAttrList;
      // }
    },
    defaultImg() {
      return this.spuImgUrl[this.bigImgIndex];
    },
    skuNumFix: {
      get() {
        return this.skuNum;
      },
      set(val) {
        if (typeof val !== "number") {
          console.log(this.skuNum);
          return this.skuNum;
        } else {
          if (val < 1) {
            return 1;
          }
          return val;
        }
      },
    },
  },

  watch: {
    spuImgUrl() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          loop: false, // 循环模式选项
          slidesPerView: 5,
          slidesPerGroup: 2,
        });
      });
    },
  },

  components: {
    ImgList,
    Zoom,
    GoodsImgList,
    GoodsRemark,
    Specifications,
  },
};
</script>

<style lang="less">
.detail-wrap {
  border-top: 2px solid #eee;
  background-color: #fff;
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

    .product-intro {
      padding-bottom: 40px;
      border-bottom: 1px solid #ddd;
      display: flex;
      // 放大镜区域
      .left {
        position: relative;
        width: 400px;

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
              position: relative;
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
              &:hover .score {
                display: block;
              }
              .score {
                display: none;
                width: 195px;
                height: 120px;
                border: 1px solid #e3007c;
                border-radius: 4px;
                padding: 0 25px;
                background: #fff;
                position: absolute;
                left: -24px;
                top: 42px;
                font-size: 12px;
                color: #030303;
                .scoreItem {
                  height: 40px;
                  line-height: 40px;
                  .iconList {
                    margin-left: 10px;
                    .icon-stared {
                      color: #eee;
                    }
                  }
                }
              }
            }
          }
        }
        .rowTitle {
          display: inline-block;
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
          background-image: url("./images/bg.png");
          background-position: 100% 0;
          background-repeat: no-repeat;
          .l_1 {
            vertical-align: bottom;
            margin-bottom: 12px;
            height: 36px;
            line-height: 36px;
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

        .category {
          .categoryItem {
            display: flex;
            align-self: center;
            margin-top: 15px;
            .title {
              line-height: 40px;
              height: 40px;
            }
            .attrList {
              display: flex;

              .params {
                padding: 6px 14px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                margin: 5px;
                height: 30px;
                border: 1px solid #979797;
                border-radius: 2px;
                cursor: pointer;
                &:hover {
                  border: 1px solid #e5008d;
                  color: #e5008d;
                }
                &.active {
                  border: 1px solid #e5008d;
                  color: #e5008d;
                }
              }
            }
          }
        }

        .goodsNum {
          display: flex;
          align-items: center;
          font-weight: 700;
          margin-top: 15px;
          button {
            width: 28px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            background: #f6f6f6;
            border-radius: 0 3px 3px 0;
            border: none;
            outline: none;
            color: #999;
            font-size: 22px;
            margin: 0 2px;
            cursor: pointer;
            &.disabled {
              cursor: not-allowed;
              background: none;
            }
          }
          input {
            width: 26px;
            height: 28px;
            padding: 0 15px;
            line-height: 28px;
            text-align: center;
            background: #f6f6f6;
            border: none;
            outline: none;
            color: #606266;
          }
        }

        .submitContainer {
          margin-top: 30px;
          padding-left: 73px;
          .submit {
            width: 178px;
            height: 38px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            background: #e5008d;
            color: #fff;
            border: 1px solid #e5008d;
            cursor: pointer;
          }
        }
      }
    }

    .similarRecommended {
      width: 1200px;
      margin: 0 auto 10px;
      .srTitle {
        height: 60px;
        padding: 0 30px 0 60px;
        p {
          width: 92px;
          height: 25px;
          font-size: 18px;
          font-weight: 400;
          color: #e3007c;
          line-height: 25px;
          text-align: center;
          padding-top: 15px;
          padding-bottom: 4px;
          border-bottom: 3px solid #e3007c;
        }
      }
      .srContainer {
        display: flex;

        .srItem {
          margin-top: 6px;
          margin-right: 6px;
          width: 235px;
          height: 311px;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          position: relative;
          .mainImg {
            width: 151px;
            height: 134px;
            margin-top: 29px;
            margin-bottom: 36px;
          }
          .srInfo {
            text-align: start;
            vertical-align: bottom;
            margin-bottom: 12px;
            height: 36px;
            line-height: 36px;
            padding-left: 15px;
            .integralNum {
              display: inline-block;
              color: #e5008d;
              font-size: 24px;
            }
            .text {
              color: #e5008d;
            }
            img {
              height: 12px;
              margin-left: 5px;
            }
          }
          .detailCont {
            padding: 0 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &:hover {
            box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
          }
        }
      }
    }

    .goodsIntro {
      display: flex;
      border-top: 1px solid #ccc;

      .gdInfo {
        padding-right: 30px;
        flex-grow: 1;
        .navInfo {
          height: 100px;
          ul {
            height: 100%;
            display: flex;
            padding: 0 20px;
            line-height: 100px;
            li {
              width: 214px;
              text-align: left;
              font-size: 18px;
              position: relative;
              cursor: pointer;
              span {
                padding: 0 5px 5px;
                box-sizing: border-box;
              }
              &.active {
                color: #e5008d;
                span {
                  border-bottom: 3px solid #e5008d;
                }
              }
            }
          }
        }
        .tabContent {
          width: 950px;
          border-right: 1px solid #ddd;
          padding-right: 30px;
        }
      }
      .detailAside {
        text-align: center;
        width: 220px;
        .goodsTitle {
          font-size: 18px;
          height: 100px;
          line-height: 100px;
        }
        .samePriceGoodsList {
          .samePriceGoodsItem {
            box-sizing: content-box;
            cursor: pointer;
            margin-top: 15px;
            height: 200px;
            text-align: center;
            border-radius: 10px;
            padding: 10px;
            img {
              width: 160px;
              height: 160px;
            }
            .info {
              margin-top: 10px;
              .num {
                color: #e5008d;
                font-size: 16px;
              }
            }
            &:hover {
              box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }
  }
}
</style>
