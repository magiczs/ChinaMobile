<template>
  <div class="fullScreen">
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
        <img src="./images/paysuc.png" alt="" />
      </div>
    </div>
    <div class="orderPaysuc container">
      <div class="all">
        <div class="opCenter">
          <div class="opIcon">
            <img src="./images/paysuccess.png" alt="" />
          </div>
        </div>
        <table border="0" class="opTable">
          <thead>
            <tr class="opTable_th">
              <th>订单编号</th>
              <th>套餐数量</th>
              <th>商品数量</th>
              <th>支付积分</th>
              <th>支付现金</th>
            </tr>
          </thead>
          <tbody>
            <tr class="opTable_tr">
              <td>{{ $route.query.orderNo }}</td>
              <td>{{ $route.params.count }}</td>
              <td>{{ $route.params.count }}</td>
              <td>{{ $route.params.total }}</td>
              <td>0元</td>
            </tr>
          </tbody>
        </table>
        <div class="opBtn">
          <p>
            <router-link class="opBtn_fla chakandingdan" to="/"
              >返回首页</router-link
            >
          </p>
          <!-- <p>
            <router-link class="opBtn_fla fanhuishouye" to="/home"
              >返回首页</router-link
            >
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaySuccess",
};
</script>

<style lang="less" scoped>
.fullScreen {
  width: 100%;
  background: #fff;
  .orderContent {
    width: 1200px;
    height: 120px;
    margin: 0 auto;
    .logo {
      width: 220px;
      height: 40px;
      margin: 30px 0 0;
      float: left;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .allstate {
      float: right;
    }
  }
  .container {
    width: 1200px;
    margin: 0 auto;
    .all {
      width: 1200px;
      height: 709px;
      box-sizing: border-box;
      background: #fff;
      .opCenter {
        width: 100%;
        height: 163px;
        .opIcon {
          width: 100%;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          padding: 40px 0;
        }
      }
      .opTable {
        width: 100%;
        border-radius: 9px 9px 9px 9px;
        border-collapse: separate;
        border: 1px solid #ddd;
        .opTable_th {
          height: 40px;
          background: #fafafa;
          z-index: 2;
          & th:first-child {
            width: 338px;
          }
          & th:nth-child(2) {
            width: 200px;
          }
          & th:nth-child(3) {
            width: 200px;
          }
          & th:nth-child(4) {
            width: 200px;
          }
          th {
            text-align: center;
            padding: 10px 0;
            box-sizing: border-box;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999;
          }
        }
        .opTable_tr {
          height: 69px;
          td {
            text-align: center;
            padding: 10px 0;
            box-sizing: border-box;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #030303;
          }
        }
      }
      .opBtn {
        padding-top: 64px;
        width: 100%;
        p {
          padding-top: 16px;
          text-align: center;
          .opBtn_fla {
            width: 340px;
            height: 48px;
            border-radius: 4px;
            display: block;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            text-align: center;
            line-height: 48px;
            cursor: pointer;
            margin: 0 auto;
          }
          .chakandingdan {
            background: linear-gradient(297deg, #d90057, #e30079 48%, #e60099);
            color: #fff;
          }
          .fanhuishouye {
            background: #fff;
            color: #e5008d;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
