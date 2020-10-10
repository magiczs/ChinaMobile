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
            <p class="money">{{ payInfo.total ? payInfo.total : "" }}积分</p>
            <p class="money" style="display: none">1积分+0元</p>
            <p class="money" style="display: none">0元</p>
          </div>
          <div class="longLine"></div>
          <div class="part2">
            <p class="orderNum">
              订单提交成功，请尽快支付！订单编号 {{ orderNo }}
            </p>
            <p class="timeout">
              <span>请您在提交订单30分钟内支付</span>
              <!-- <span class="decsTime">剩余支付时间：7分40秒</span> -->
            </p>
            <p class="wenan">
              未成功支付的订单，可继续支付或取消订单，超时未支付的订单，将自动取消
              <br />已取消的订单，所扣积分会在24小时内回退到您的账户中
            </p>
          </div>
        </div>
        <img src="./images/footer.png" alt="" />
      </div>
      <section class="content bgf">
        <div class="conTitle">
          <p class="first">
            <span>商品信息</span>
          </p>
          <div class="secondBox add">
            <p class="second">
              <span>{{ payInfo.productName }}</span>
              <span>×{{ payInfo.count }}</span> <span></span>
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
                v-model="code"
                name="code"
                v-validate="{ required: true, regex: /^\d{6}$/ }"
                :class="{ invalid: errors.has('code') }"
              />
              <span class="error-msg">{{ errors.first("code") }}</span>
              <span class="line"></span>
              <span
                class="getShortMes"
                style=""
                @click="getShortMes"
                v-show="!isSendCode"
                >获取短信验证码</span
              >
              <span class="getShortMes_time" v-show="isSendCode"
                >{{ timeout }}s后重新获取</span
              >
            </p>
            <p class="checkLog">
              <input
                type="txt"
                placeholder="请输入手机号码"
                maxlength="20"
                class="txt"
                v-model="password"
                name="password"
                v-validate="{ required: true, regex: /^\w{6,20}$/ }"
                :class="{ invalid: errors.has('password') }"
              />
              <span class="error-msg">{{ errors.first("password") }}</span>
              <span class="forget">忘记密码，请咨询10086</span>
            </p>
          </div>
          <div class="immediately">
            <button class="btn" @click="pay">立即支付</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      password: "",
      //输入的验证码
      code: "",
      //随机生成的验证码
      isCode: "",
      //重新获取验证码时间
      timeout: 30,
      //验证码发送状态
      isSendCode: false,
      //订单详情数据
      payInfo: {},
    };
  },
  mounted() {
    // this.getPayInfo();
  },
  methods: {
    //获取订单详情
    async getPayInfo() {
      const result = await this.$API.pay.reqPayInfo(this.$route.params.orderId);
      if (result.code === 200) {
        this.payInfo = result.data;
      }
    },
    //发送验证码
    async getShortMes() {
      //生成随机6位数字作为验证码
      this.isCode = Math.floor((Math.random() * 9 + 1) * 100000);
      //改变验证码发送状态
      this.isSendCode = true;
      const result = await this.$API.pay.reqCode({
        isCode: this.isCode,
        phone: this.password,
      });
      if (result.statusCode !== "000000") {
        this.$message.error("验证码发送失败!");
        return;
      } else {
        this.$message.success("验证码发送成功!");
      }
      const timer = setInterval(() => {
        this.timeout--;
        if (this.timeout < 0) {
          this.isSendCode = false;
          this.timeout = 30;
          clearInterval(timer);
          return;
        }
      }, 1000);
    },
    //支付
    async pay() {
      // if (!this.password || !this.code) {
      //   this.$message.error("请输入短信验证码和支付密码!");
      //   return;
      // } else if (this.code != this.isCode) {
      //   this.$message.error("验证码错误!");
      //   return;
      // }
      this.$message.success("验证码输入正确!");
      // let { count, total, orderId } = this.payInfo;
      // const result = await this.$API.pay.reqOrderStatus({ orderId });
      // if (result.code === 200) {
      // let location = {
      //   name: "paysuccess",
      //   params: { total, count },
      //   query: { orderNo: this.orderNo },
      // };
      // this.$router.push(location);
      // }
    },
  },
  computed: {
    orderNo() {
      return this.$route.query.orderNo;
    },
  },
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
        .timeout {
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
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
          .error-msg {
            color: red;
            font-size: 16px;
          }
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
          .getShortMes_time {
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
            color: #666;
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
