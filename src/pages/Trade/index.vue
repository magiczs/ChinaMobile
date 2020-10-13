<template>
  <div class="tradeContainer">
    <!-- 头部订单进度区域 -->
    <div class="orderContent">
      <div class="logo">
        <img
          src="https://jf.10086.cn/static/img/logo.fccfc0f.png"
          alt=""
          @click="$router.push('/home')"
        />
      </div>
      <div class="allstate">
        <img src="./images/trade.png" alt="" />
      </div>
    </div>
    <!-- 收货地址选择区域 -->
    <div v-if="tradeInfo.gsmTag">
      <div class="between pt20 pb20">
        <span class="textTitle">选择收货地址</span>
        <span class="blueBtn">管理收货地址</span>
      </div>
      <div>
        <div class="addrList">
          <div
            class="addrItem"
            :class="isActive === 0 ? 'isActive' : 'notActive'"
            @click="isActive = 0"
          >
            <p class="userName">广东省 深圳市 宝安区 (尚硅谷 收)</p>
            <p class="pt10 cl666 break2">
              深圳市宝安区西部硅谷大厦B座C区一层 18888888888
            </p>
            <!-- defaultArr notDefault -->
            <div
              class="relative"
              :class="isDefault === 1 ? 'isDefault' : 'notDefault'"
              @click="isDefault = 1"
            >
              <span>{{ isDefault === 1 ? "默认地址" : "设为默认" }}</span>
            </div>
          </div>
          <div
            class="addrItem"
            :class="isActive === 1 ? 'isActive' : 'notActive'"
            @click="isActive = 1"
          >
            <p class="userName">北京市 昌平区 (尚硅谷 收)</p>
            <p class="pt10 cl666 break2">
              北京市昌平区宏福科技园综合楼6层 18888888888
            </p>
            <div
              class="relative"
              :class="isDefault === 0 ? 'isDefault' : 'notDefault'"
              @click="isDefault = 0"
            >
              <span>{{ isDefault === 0 ? "默认地址" : "设为默认" }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品清单头部文字 -->
    <div class="between">
      <span class="textTitle">商品清单</span>
      <router-link class="blueBtn" to="" @click.native="$router.go(-1)"
        >返回修改订单</router-link
      >
    </div>
    <!-- 中间商品价格区域 -->
    <div class="orderList">
      <div class="order-header">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="el-table__header"
          style="width: 1198px"
        >
          <colgroup>
            <col name="el-table_3_column_9" width="580" />
            <col name="el-table_3_column_10" width="206" />
            <col name="el-table_3_column_11" width="206" />
            <col name="el-table_3_column_12" width="206" />
          </colgroup>
          <thead class="has-gutter">
            <tr class="tableHeader">
              <th colspan="1" rowspan="1" class="el-table_3_column_9 is-leaf">
                <div class="cell">商品信息</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_3_column_10 is-center is-leaf"
              >
                <div class="cell">商品数量</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_3_column_11 is-center is-leaf"
              >
                <div class="cell">商品单价</div>
              </th>
              <th
                colspan="1"
                rowspan="1"
                class="el-table_3_column_12 is-center is-leaf"
              >
                <div class="cell">商品小计</div>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="order-center">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="el-table__body"
          style="width: 1198px"
        >
          <colgroup>
            <col name="el-table_3_column_9" width="580" />
            <col name="el-table_3_column_10" width="206" />
            <col name="el-table_3_column_11" width="206" />
            <col name="el-table_3_column_12" width="206" />
          </colgroup>
          <tbody>
            <tr class="el-table__row">
              <td rowspan="1" colspan="1" class="el-table_3_column_9">
                <div class="cell">
                  <div class="fx pf10 fontR">
                    <img :src="tradeInfo.spuImgUrl[0]" class="gdImg" />
                    <div class="gdInfo">
                      <p class="cl03 beyond_ellipsis2 w400">
                        {{ tradeInfo.wareName }}
                      </p>

                      <p class="cl666 font12">直接兑换</p>
                    </div>
                  </div>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_3_column_10 is-center"
              >
                <div class="cell">
                  <div class="productsNum">
                    <button
                      class="operBtn-minus"
                      :class="{ 'no-drop': count === 1 }"
                      @click="updateCartNum(-1)"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      autocomplete="off"
                      class="input"
                      :value="count"
                      @change="updateCartNum($event.target.value * 1 - count)"
                      oninput="value = value.replace(/[^\d]/g, '')"
                    />

                    <button
                      class="operBtn-plus"
                      :class="{ 'no-drop': count === 99 }"
                      @click="updateCartNum(1)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_3_column_11 is-center"
              >
                <div class="cell">
                  <span class="fontF">{{ tradeInfo.marketPrice }}积分</span>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_3_column_12 is-center"
              >
                <div class="cell">
                  <span class="fontF">{{ totalPrice }}积分</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 底部 -->
    <div class="textContainer">
      <p class="text-top">
        <span class="cl666">当前可用积分:</span>
        <span class="clRed fw font14 valItem"
          >{{ userCanuseIntegral }}积分</span
        >
      </p>
      <p class="text-center">
        <span class="cl666">订单总计:</span>
        <span class="clRed fw font14 valItem">{{ totalPrice }}积分 + 0元</span>
      </p>
      <div class="text-bottom">
        <p>
          <span class="font14 mr10">实际支付</span>
          <span class="clRed font22 fw">
            {{ totalPrice }}
            <span class="font14 normal">积分 +</span>
            0
            <span class="font14 normal">元</span></span
          >
        </p>
        <button
          type="button"
          class="el-button submitBtn el-button--primary"
          @click="handleSubmit"
        >
          <span>提交订单</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trade",
  data() {
    return {
      isActive: 0,
      isDefault: 0,
      //用户可用积分
      userCanuseIntegral: 99999,
      count: this.$route.query.num,
      spuId: this.$route.query.spuId,
    };
  },
  methods: {
    updateCartNum(disNum) {
      this.count += disNum;
      if (this.count < 1) {
        this.count = 1;
        return;
      }
      if (this.count > 99) {
        this.count = 99;
        return;
      }
    },
    async handleSubmit() {
      if (this.userCanuseIntegral < this.totalPrice) {
        this.$message.error("可用积分不足");
        return;
      }
      //获取发送请求订单数据的参数
      let { spuId, count } = this;
      const result = await this.$API.pay.reqTradeInfo({ spuId, count });
      if (result.code === 200) {
        let { orderId, created } = result.data;
        let location = {
          name: "pay",
          params: { orderId },
          query: { orderNo: created },
        };
        this.$router.push(location);
      }
    },
  },
  computed: {
    tradeInfo() {
      return JSON.parse(sessionStorage.getItem("spuInfo"));
    },
    totalPrice() {
      return this.tradeInfo.marketPrice * this.count;
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 1/1px;
.for(@i) when (@i<=21) {
  @size: @i * 5;
  .for(@i + 1);
  .m@{size}{
      margin: @size/@rem;
    }
  .ml@{size}{
    margin-left: @size/@rem;
  }
  .mr@{size}{
    margin-right: @size/@rem;
  }
  .mt@{size}{
    margin-top: @size/@rem;
  }
  .mb@{size}{
    margin-bottom: @size/@rem;
  }
 
  .p@{size}{
    padding: @size/@rem;
  }
  .pl@{size}{
    padding-left: @size/@rem;
  }
  .pr@{size}{
    padding-right: @size/@rem;
  }
  .pt@{size}{
    padding-top: @size/@rem;
  }
  .pb@{size}{
    padding-bottom: @size/@rem;
  }
}
.for(1);
.tradeContainer {
  width: 1200px;
  margin: 0 auto;
  .orderContent{
    width: 1200px;
    height: 120px;
    margin: 0 auto;
    .logo{
      width: 220px;
      height: 40px;
      margin: 30px 0 0;
      float: left;
      cursor: pointer;
      img{
        width: 100%;
      }
    }
    .allstate{
      float: right;
    }
  }
  .between {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .textTitle {
      font-size: 16px;
      font-weight: 700;
    }
    .blueBtn {
      color: #0085cf;
      font-size: 14px;
      cursor: pointer;
    }
  }
  .addrList{
    padding-left: 17px;
    display: flex;
    .addrItem{
      width: 282px;
      height: 134px;
      padding: 0 16px;
      box-sizing: border-box;
      margin-right: 18px;
      margin-bottom: 18px;
      .userName{
        height: 44px;
        line-height: 44px;
        font-weight: 700;
        font-size: 14px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
      }
      .break2{
        height: 37px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #666;
      }
      .relative {
        position: relative;
        >span{
          cursor: pointer;
          // color: #030303;
          position: absolute;
          right: 0;
          top: 15px;
        }
      }
      .isDefault{
        color: black;
        font-weight: 600;
      }
      .notDefault{
        display: none;
      }
      &:hover .notDefault{
        display:block;
        color: #666;
      }
    }
    .addrItem:hover{
    box-shadow: 0 0 5px #ccc;
    cursor: default;
    }
    .notActive{
      background-image: url(./images/border01.png);
    }
    .isActive{
      background-image: url(./images/border02.png);
    }
  }
  .orderList {
    border: 1px solid #ddd;
    thead {
      color: #909399;
      font-size: 16px;
      th {
        background: #fafafa;
        padding: 12px 0;
      }
    }
    .order-center {
      .is-center {
        text-align: center;
      }
      td {
        vertical-align: top;
        padding-top: 25px;
        padding-bottom: 18px;
        font-size: 16px;
        .cell {
          display: inline-flex;
          padding-right: 10px;
          .fontF {
            font-weight: 600;
          }
          > div {
            display: flex;
            padding-left: 20px;
            img {
              width: 100px;
              height: 100px;
              margin-right: 16px;
              border-radius: 4px;
            }
            .gdInfo {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .font12 {
                font-size: 12px;
                color: #666;
              }
            }
          }
          .productsNum {
            margin: 0 auto;
            > button {
              width: 30px;
              height: 28px;
              text-align: center;
              background: white;
              border-radius: 0 3px 3px 0;
              outline: none;
              color: #999;
              font-size: 30px;
              cursor: pointer;
              border: 1px solid #dcdfe6;
              font-weight: 100;
              cursor: pointer;
              line-height: 28px;
            }
            input {
              width: 20px;
              height: 26px;
              padding: 0 15px;
              line-height: 28px;
              text-align: center;
              outline: 0;
              color: #606266;
              border: 1px solid #dcdfe6;
              transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
              &:hover{
                border-color: #c0c4cc;
              }
            }
            .input:focus{
                border-color: #e5008d;
                outline: 0;
              }
            .no-drop {
              cursor: no-drop;
              border: 1px solid transparent;
              color: #dcdfe6;
            }
          }
        }
      }
    }
  }
  .textContainer {
    text-align: right;
    margin-right: 20px;
    padding-bottom: 40px;
    .cl666 {
      color: #666;
      font-size: 16px;
    }
    .valItem {
      width: 170px;
      display: inline-block;
    }
    .font14 {
      font-size: 14px;
    }
    .font22 {
      font-size: 22px;
    }
    .clRed {
      color: #e5008d;
    }
    .fw {
      font-weight: 700;
    }
    .normal {
      font-weight: 400;
    }
    .text-top {
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .text-center {
      margin-bottom: 20px;
    }
    .text-bottom {
      display: flex;
      padding-right: 10px;
      background: #fafafa;
      height: 80px;
      width: 1200px;
      justify-content: flex-end;
      align-items: center;
      .submitBtn {
        width: 180px;
        height: 50px;
        margin-left: 30px;
        color: #fff;
        background-color: #e5008d;
        padding: 12px 20px;
        outline: 0;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
