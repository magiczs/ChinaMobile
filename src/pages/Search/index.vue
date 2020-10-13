<template>
  <div class="qb">
    <div class="container">
      <!-- 商品筛选 -->
      <div class="filterGds bgf">
        <!-- 头部开始 -->
        <div class="navBox">
          <div>
            <span class="fw">全部</span>
            <span class="plf6">></span>
            <span>小米有品</span>
            <span v-show="form.searchinfo.wareBrandName" class="searchinfo"
              >{{ form.searchinfo.wareBrandName
              }}<i class="iconfont icon-x iconx" @click="iconx"></i
            ></span>
          </div>
          <div class="fx alignCt"></div>
        </div>
        <!-- 商品选项内容 -->
        <section class="filterCt">
          <!-- 商品选项第一行 -->
          <div class="statisBox">
            <div class="sortName fw blackTxt">商品选项：</div>
            <p>共搜索到 <span class="clRed">516</span>款商品</p>
          </div>
          <!-- 商品选项第三行 -->
          <div>
            <div class="itemType" style>
              <div class="sortName h40">品牌：</div>
              <div class="w50 h40 nolimit">不限</div>
              <div
                class="overHid fx wrap"
                v-for="(teademark, index) in CategoryList.trademarkList"
                :key="index"
                @click="searchfotrademak(teademark)"
              >
                <div class="w104 beyond_ellipsis1 ml30 h40 filTerm">
                  {{ teademark }}
                </div>
              </div>
              <div class="btnBox h40">
                <button type="button" class="el-button el-button--default">
                  <span>更多<i class="iconfont icon-arrow-down"></i></span>
                </button>
                <button type="button" class="el-button el-button--default">
                  <span>多选<i class="iconfont icon-add"></i></span>
                </button>
              </div>
            </div>
          </div>
          <!-- 商品选项第四行 -->
          <div class="itemType" style>
            <div class="sortName h40">积分范围：</div>
            <div class="w50 h40 nolimit">不限</div>
            <div class="fx wrap">
              <span class="ml30 h40 filTerm" style="display: none">0-1000</span>
              <span class="ml30 h40 filTerm">0-1000</span>
              <span class="ml30 h40 filTerm">2000-3000</span>
              <span class="ml30 h40 filTerm">3000-5000</span>
              <span class="ml30 h40 filTerm">5000-10000</span>
              <span class="ml30 h40 filTerm">10000-20000</span>
              <span class="ml30 h40 filTerm">20000以上</span>
            </div>
          </div>
          <!-- 商品选项第五行 -->
          <div class="itemType" style>
            <div class="sortName h40">支付方式</div>
            <div class="w50 h40 nolimit">不限</div>
            <div>
              <span class="ml30 h40 filTerm">全积分</span>
              <span class="ml30 h40 filTerm">积分+现金</span>
            </div>
          </div>
        </section>
      </div>
      <!-- 排序 -->
      <div class="sortType">
        <span>排序方式：</span>
        <div class="fx alignCt">
          <span class="sortItem fx redColor" @click="handlesort">
            积分值
            <span class="jfArrow">
              <img src="./img/up.png" v-if="form.sort === 1" />
              <img src="./img/down.png" v-else />
            </span>
          </span>
          <span class="sortItem"> 新品 </span>
          <span class="sortItem"> 好评度 </span>
          <span class="sortItem"> 销量 </span>
          <label class="el-checkbox sortItem disCount">
            <span class="el-checkbox__input">
              <input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                value
              />
            </span>
            <span class="el-checkbox__label"> 商品折扣 </span>
          </label>
          <div class="searchBox el-input el-input--prefix">
            <input
              type="text"
              autocomplete="off"
              placeholder="在结果中搜索"
              class="el-input__inner"
            />
            <span class="el-input__prefix">
              <i class="el-input__icon iconfont icon-search"></i>
            </span>
          </div>
          <button type="button" class="el-button sureSort el-button--default">
            <span>确定</span>
          </button>
        </div>
      </div>
      <!-- 商品卡片 -->
      <div class="gdList">
        <div
          class="gdItem curPoint"
          v-for="(goods, index) in CategoryList.products"
          :key="goods.spuId"
          @click="totetail(goods.spuId)"
        >
          <div class="imgCont">
            <img :src="goods.spuImgUrl[0]" />
          </div>
          <div class="smallImg">
            <div v-for="(smgood, index) in goods.spuImgUrl" :key="index">
              <img :src="smgood" />
            </div>
          </div>
          <div class="payParams fx">
            <span class="font24 clRed">
              {{ goods.marketPrice }}
            </span>
            <span class="lText clRed font12"> 积分 </span>
          </div>
          <div class="listTags">
            <i class="iconfont icon-ChinaMobile"></i>
          </div>
          <div class="fx mb5 mt5">
            <span class="beyond_ellipsis2 title">
              <img src="./img/qqt.png" class="param discount" />
              {{ goods.wareName }}
            </span>
          </div>
          <div class="commont">
            <span>9999评价</span>
            <span> 100%好评</span>
          </div>
        </div>
      </div>
      <!-- <el-pagination
        @current-change="changePageNum"
        :page-size="form.limit"
        layout="total, prev, pager, next"
        :total="CategoryList.total"
        :current-page.sync="form.page"
        @size-change="handleSizeChange"
      >
      </el-pagination> -->
      <el-pagination
        @current-change="changePageNum"
        :current-page="form.page"
        :page-sizes="[2, 3, 5, 10]"
        :page-size="form.limit"
        layout=" prev, pager, next, jumper, ->, sizes, total"
        style="text-align: center"
        :total="CategoryList.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "search",
  data() {
    return {
      form: {
        searchinfo: {},
        keyword: "",
        page: 1,
        limit: 3,
        sort: 1,
        body: "",
      },
    };
  },
  mounted() {
    this.getCategoryList(this.form);
  },
  methods: {
    getCategoryList(form) {
      this.$store.dispatch("getCategoryList", form);
    },
    handlesort() {
      this.sort === 1 ? (this.sort = -1) : (this.sort = 1);
      this.$store.dispatch("getCategoryList", { sort: this.sort });
    },
    searchfotrademak(wareBrandName) {
      this.form.searchinfo.wareBrandName = wareBrandName;
      this.$store.dispatch("getCategoryList", this.form);
    },
    iconx() {
      this.form.searchinfo.wareBrandName = "";
      this.getCategoryList(this.form);
    },
    changePageNum(page) {
      this.form.page = page;
      this.getCategoryList(this.form);
    },
    totetail(spuId) {
      this.$router.push(`/detail?spuId=${spuId}`);
    },
  },
  computed: {
    ...mapState({
      CategoryList: (state) => state.search.categoryList,
    }),
  },
};
</script>

<style lang="less">
.qb {
  width: 100%;
  background: #f6f6f6;
  font-size: 12px/1.5;
  color: #333;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.filterGds {
  position: relative;
  width: 1200px;
  // 头部开始
  .navBox {
    height: 34px;
    line-height: 34px;
    margin-top: 12px;
    display: flex;
    background: #f6f6f6;
    box-align: center;
    align-items: center;

    .plf6 {
      padding: 0 6px;
    }
    span {
      font-size: 12px;
      color: #030303;
    }
    .searchinfo {
      background-color: #fff;
      height: 12px;
      width: 12px;
      margin: 0 0 0 10px;
      color: #e5008d;
      .iconx {
        width: 24px;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        text-align: center;
        cursor: pointer;
        height: 22px;
        line-height: 2px;
      }
    }
  }
  // 商品选项第一行
  .statisBox {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    .sortName {
      width: 100px;
      padding-left: 15px;
    }
    .blackTxt {
      color: #030303;
    }
    p {
      font-size: 12px;
      color: #030303;
      .clRed {
        color: #e5008d;
      }
    }
  }
  // 商品选项第二行
  .itemType {
    border-bottom: 1px solid #f0f0f0;
    min-height: 40px;
    display: flex;
    .sortName {
      width: 100px;
      padding-left: 15px;
      color: #786d6d;
      font-size: 12px;
    }
    .nolimit {
      color: #333;
      cursor: default;
      font-weight: 600;
      font-size: 12px;
    }
    .overHid {
      height: 40px;
      overflow: hidden;
      cursor: pointer;
      .w104 {
        width: 104px;
      }
    }
    .wrap {
      flex-wrap: wrap;
    }
    .btnBox {
      margin-left: auto;
      margin-right: 15px;
      .w56 {
        width: 56px;
      }

      .el-input--mini {
        font-size: 12px;
      }
    }
    .writeFen {
      -webkit-box-align: center;
      align-items: center;
      width: 200px;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
  }
  .mulBox {
    border: 2px solid #e5e5e5;
    padding: 15px;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    .mulName {
      width: 70px;
      height: auto;
      padding-top: 5px;
      flex-shrink: 0;
    }
    .mulList {
      max-width: 120px;
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      padding-bottom: 5px;
      .mulItem {
        width: 104px;
        height: 25px;
        line-height: 21px;
        border: 1px solid #fff;
        margin-top: 3px;
        text-indent: 4px;
        cursor: pointer;
        margin-right: 36px;
      }
    }
    .text_m {
      text-align: center;
      .redSure {
        background-color: #e5008d;
        color: #fff;
        border: 1px solid #e5008d;
      }
      .grayBtn {
        background-color: #f3f3f3;
        color: #666;
        border: 1px solid #dcdcdc;
      }
    }
  }
}
// 商品排序
.sortType {
  height: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 15px;
  background: #fff;
  margin-top: 12px;
  margin-bottom: 2px;
  .redColor {
    color: #e5008d;
    .jfArrow {
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      padding-left: 10px;
    }
  }
  .disCount {
    margin: 0 30px 0 20px;
  }
  .searchBox {
    width: 240px;
  }
}
// 商品卡片
.gdList {
  width: 1210px;
  padding-bottom: 10px;
  .gdItem {
    width: 232px;
    height: 410px;
    border-radius: 10px;
    background: #fff;
    padding: 15px;
    box-sizing: border-box;
    margin-top: 10px;
    margin-right: 10px;
    display: inline-block;
    vertical-align: bottom;
    .imgCont {
      height: 202px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .smallImg {
    display: flex;
    margin: 10px 0;
    cursor: pointer;
    div {
      margin-right: 4px;
      border-radius: 2px;
      border: 1px solid #f0f0f0;
      width: 30px;
      height: 30px;
      img {
        width: 30px;
        height: 30px;
        border: 0;
        outline: none;
        vertical-align: middle;
      }
    }
  }
  .curPoint {
    cursor: pointer;
  }
  .payParams {
    -webkit-box-align: baseline;
    align-items: baseline;
    .font24 {
      font-size: 24px;
      color: #e5008d;
    }
    .lText {
      position: relative;
      bottom: 2px;
      margin-left: 2px;
    }
    .font12 {
      font-size: 12px;
      color: #e5008d;
    }
    .mt5 {
      margin-top: 5px;
    }
    .mb5 {
      margin-bottom: 5px;
    }
    .param {
      height: 15px;
      vertical-align: text-bottom;
    }
    .discount {
      margin: 0 6px 0 0;
    }
    img {
      border: 0;
      outline: none;
    }
  }
}
.bgf {
  background: #fff;
}
.fw {
  font-weight: 700;
  font-size: 12px;
  color: #030303;
}
.w50 {
  width: 50px;
}
div {
  display: block;
}
.fx {
  display: flex;
}
.beyond_ellipsis1 {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
button {
  width: 52px;
  height: 22px;
  line-height: 22px;
  border-radius: 4px;
  font-size: 12px;
  padding: 0;
}
.el-button {
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  margin-left: 10px;
}
.ml30 {
  margin-left: 30px;
}
.el-input__inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  outline: 0;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  border-radius: 50px;
}
.alignCt {
  -webkit-box-align: center;
  align-items: center;
}
.sortItem {
  padding-right: 40px;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.el-checkbox {
  color: #606266;
  font-size: 14px;
  .el-checkbox__label {
    font-size: 12px;
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
  }
}
.el-input {
  font-size: 14px;
  position: relative;
  display: inline-block;
}
.el-input__prefix {
  left: 5px;
  position: absolute;
  top: 0;
  height: 100%;
  color: #c0c4cc;
  text-align: center;
}
.el-input__inner {
  padding-left: 30px;
}
.el-input__icon {
  line-height: 22px;
  height: 100%;
  width: 25px;
  text-align: center;
}
.sureSort {
  width: 52px;
  height: 22px;
  line-height: 20px;
  border-radius: 4px;
  padding: 0;
  margin-left: 12px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background-color: #e5008d;
  border: none;
}
.turnPage {
  margin-left: auto;
}
.arrowBth {
  width: 26px;
  height: 26px;
  padding: 0;
  line-height: 22px;
}
.mb5 {
  margin-bottom: 5px;
}
.mt5 {
  margin-top: 5px;
}
.discount {
  margin: 0 6px 0 0;
}
.param {
  height: 15px;
  vertical-align: text-bottom;
}
.commont {
  color: #8e8585;
}
.h40 {
  height: 40px;
  line-height: 40px;
  flex-shrink: 0;
}
</style>
