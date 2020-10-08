<template>
  <div class="tradeContainer">
    <!-- 头部文字 -->
    <div class="between">
      <span class="textTitle">商品清单</span>
      <span class="blueBtn">返回修改订单</span>
    </div>
    <!-- 中间显示商品区域 -->
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
                    <img
                      src="https://jf-asset1.10086.cn/pic/ware/5eb8c7/e/5eb8c7e2d5f19b2f93aca8d8.jpg"
                      class="gdImg"
                    />
                    <div class="gdInfo">
                      <p class="cl03 beyond_ellipsis2 w400">
                        常青藤爸爸会员月卡体验券
                      </p>
                      <!---->
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
                  <div class="fx productsNum">
                    <span class="operBtn-minus">-</span>
                    <div class="numBox el-input">
                      <!----><input
                        type="text"
                        autocomplete="off"
                        class="el-input__inner"
                        value="1"
                      /><!----><!----><!----><!---->
                    </div>
                    <span class="operBtn-plus">+</span>
                  </div>
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_3_column_11 is-center"
              >
                <div class="cell">
                  <span class="fontF">1积分</span>
                  <!---->
                  <!---->
                  <!---->
                </div>
              </td>
              <td
                rowspan="1"
                colspan="1"
                class="el-table_3_column_12 is-center"
              >
                <div class="cell">
                  <span class="fontF">1积分</span>
                  <!---->
                  <!---->
                </div>
              </td>
            </tr>
            <!---->
          </tbody>
        </table>
      </div>
    </div>
    <!-- 底部 -->
    <div class="textContainer">
      <p class="text-top">
        <span class="cl666">当前可用积分:</span>
        <span class="clRed fw font14 valItem">83积分</span>
      </p>
      <p class="text-center">
        <span class="cl666">订单总计:</span>
        <span class="clRed fw font14 valItem">2积分 + 0元</span>
      </p>
      <div class="text-bottom">
        <p>
          <span class="font14 mr10">实际支付</span>
          <span class="clRed font22 fw">
            2
            <span class="font14 normal">积分 +</span>
            0
            <span class="font14 normal">元</span></span
          >
        </p>
        <button type="button" class="el-button submitBtn el-button--primary">
          <!----><!----><span>提交订单</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trade",
};
</script>

<style lang="less" scoped>
.tradeContainer {
  width: 1200px;
  margin: 0 auto;
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
            > span {
              width: 25px;
              font-size: 30px;
              border: 1px solid #dcdfe6;
              height: 30px;
              line-height: 30px;
              cursor: pointer;
              font-weight: 100;
            }
            input {
              width: 50px;
              border: 1px solid #dcdfe6;
              height: 30px;
              line-height: 30px;
              border-radius: 0;
              text-align: center;
              outline: 0;
            }
          }
        }
      }
    }
  }
  .textContainer {
    float: right;
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
