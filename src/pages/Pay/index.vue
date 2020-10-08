<template>
  <div class="body-bg">
    <div class="paying container">
      <div class="header bgf">
        <div class="headerTitle">
          <span class="line"></span> <span class="titleText">收银台</span>
        </div>
        <div class="headerContent">
          <div class="part1">
            <p class="pay">应付</p>
            <p class="money">1积分</p>
            <p class="money" style="display: none">1积分+0元</p>
            <p class="money" style="display: none">0元</p>
          </div>
          <div class="longLine"></div>
          <div class="part2">
            <p class="orderNum">
              订单提交成功，请尽快支付！订单编号 92201007115741542218
            </p>
            <p class="time">
              <span>请您在提交订单30分钟内支付,</span>
              <span class="decsTime">剩余支付时间：7分40秒</span>
            </p>
            <p class="wenan">
              未成功支付的订单，可继续支付或取消订单，超时未支付的订单，将自动取消
              <br />已取消的订单，所扣积分会在24小时内回退到您的账户中
            </p>
          </div>
        </div>
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <section class="content bgf">
        <div class="conTitle">
          <p class="first">
            <span>商品信息</span>
          </p>
          <div class="secondBox add">
            <p class="second">
              <span>车萝卜停车牌6个月体验</span> <span>×1</span> <span></span>
              <!---->
              <!---->
              <!---->
              <span>直接兑换</span>
            </p>
          </div>
        </div>
        <div class="payType">
          <p class="payType_title">
            <span>积分支付</span>
          </p>
          <div class="left">
            <p class="checkLog">
              <input
                type="text"
                placeholder="请输入短信验证码"
                maxlength="6"
                class="txt"
              />
              <span class="line"></span>
              <span class="getShortMes" style="">获取短信验证码</span>
              <span class="getShortMes_time" style="display: none"
                >12s后重新获取</span
              >
            </p>
            <p class="checkLog">
              <input
                type="password"
                placeholder="请输入客服密码"
                maxlength="20"
                class="txt"
              />
              <span class="forget">忘记密码，请咨询10086</span>
            </p>
            <p class="checkLog" style="display: none">
              <input
                type="password"
                placeholder="请输入支付密码"
                maxlength="20"
                class="txt"
              />
              <span class="forget">忘记密码，请咨询10086</span>
            </p>
          </div>
          <div class="immediately"><button class="btn">立即支付</button></div>
        </div>
      </section>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
};
</script>

<style lang="less" scoped>
.body-bg {
  background: #f6f6f6;
}
.paying {
  width: 1200px;
  margin: 0 auto;
  background: #fff;
  padding: 20px 0 40px;
  .header {
    width: 100%;
    height: 220px;
    box-shadow: 0 2px 8px 0 rgba(88, 79, 79, 0.15);
    border-radius: 10px 10px 0 0;
    position: relative;
    z-index: 2;
    .headerTitle {
      height: 42px;
      background: #e3007e;
      border-radius: 10px 10px 0 0;
      .line {
        display: block;
        width: 2px;
        height: 6px;
        background: #fff;
        border-radius: 2px;
        margin: 18px 0 18px 19px;
        float: left;
      }
      .titleText {
        width: 54px;
        height: 25px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #fff;
        line-height: 25px;
        float: left;
        display: block;
        margin: 8px 0 0 10px;
      }
    }
    .headerContent {
      height: 120px;
      margin: 32px 0 0;
      .part1 {
        float: left;
        width: 289px;
        height: 100%;
        margin: 0 0 0 10px;
        text-align: center;
        .pay {
          width: 32px;
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #666;
          line-height: 22px;
          margin: 18px auto 20px;
        }
        .money {
          height: 29px;
          font-size: 24px;
          font-family: Lato-Bold, Lato;
          font-weight: 700;
          color: #e5008d;
          line-height: 29px;
          margin: 0 auto;
        }
      }
      .longLine {
        width: 1px;
        height: 120px;
        background: #ddd;
        float: left;
      }
      .part2 {
        height: 100%;
        float: left;
        .orderNum {
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #030303;
          line-height: 22px;
          padding: 0 0 14px 64px;
        }
        .time {
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #e5008d;
          line-height: 22px;
          padding: 0 0 14px 64px;
        }
        .wenan {
          height: 22px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666;
          line-height: 22px;
          padding: 0 0 0 64px;
        }
      }
    }
    img {
      position: absolute;
      z-index: 1;
      bottom: -15px;
    }
  }
  .content {
    box-shadow: 0 2px 8px 0 rgba(88, 79, 79, 0.15);
    border-radius: 10px;
    margin: -7px auto 0;
    position: relative;
    z-index: 1;
    .conTitle {
      width: 1160px;
      margin: 0 auto;
      border-bottom: 1px dashed #ddd;
      padding: 13px 0 50px;
      .first {
        width: 100%;
        height: 22px;
        padding: 24px 0;
        span:first-child {
          font-size: 16px;
          color: #030303;
        }
      }
      .add {
        width: 100%;
        overflow: hidden;
        height: 41px;
        .second {
          width: 100%;
          height: 21px;
          margin: 0 0 0 20px;
          padding: 10px 0;
          span:first-child {
            width: 600px;
            height: 21px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #030303;
            line-height: 21px;
            display: block;
            float: left;
          }
          span:nth-child(2) {
            height: 21px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666;
            line-height: 21px;
            display: block;
            float: left;
            text-align: center;
            width: 80px;
            padding: 0 20px;
          }
          span:nth-child(3) {
            width: 300px;
            padding: 0 40px 0 0;
            overflow: hidden;
            height: 21px;
            font-size: 15px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666;
            line-height: 21px;
            display: block;
            float: left;
            text-align: center;
          }
          span:nth-child(4) {
            width: 80px;
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #666;
            line-height: 20px;
            display: block;
            float: left;
            text-align: center;
          }
        }
      }
    }
    .payType {
      width: 1160px;
      height: 440px;
      padding: 19px 20px 30px;
      .payType_title {
        width: 100%;
        height: 22px;
        padding: 0 0 30px;
        span:first-child {
          height: 22px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #030303;
          line-height: 22px;
          display: block;
          float: left;
        }
      }
      .left {
        width: 50%;
        height: 289px;
        float: left;
        .checkLog:first-child {
          position: relative;
        }
        .checkLog {
          padding: 0 0 35px 20px;
          width: 396px;
          input {
            display: block;
            width: 381px;
            height: 56px;
            background: #fff;
            border-radius: 4px;
            border: 1px solid #d3cdcd;
            outline: none;
            padding: 0 0 0 15px;
            font-size: 14px;
          }
          .line {
            width: 1px;
            height: 11px;
            background: #d8d8d8;
            position: absolute;
            top: 23px;
            right: 140px;
          }
          .getShortMes {
            width: 99px;
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 20px;
            display: block;
            padding: 18px 21px 18px 20px;
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            color: #e3007e;
          }
          .forget {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #4a4343;
            display: block;
            float: right;
            padding: 5px 0 0;
          }
        }
      }
      .immediately {
        width: 1160px;
        height: 80px;
        background: #fafafa;
        float: left;
        margin: 16px 0 0;
        .btn {
          width: 240px;
          height: 48px;
          background: #e3007c;
          border-radius: 4px;
          outline: none;
          border: 0;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #fff;
          margin: 16px 20px 0 0;
          float: right;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
