<template>
  <div class="app">
    <div class="loginPage">
      <div class="header">
        <div class="headerCenter">
          <div class="logo">
            <img src="./images/logo230x42.30b1340.png" alt="" />
            <router-link class="back" to="/home">返回</router-link>
          </div>
        </div>
      </div>
      <section class="content">
        <div class="contentCenter">
          <img src="./images/main.f2e0fb0.png" alt="" />
          <div class="tabs">
            <ul class="tabsTitle">
              <li
                class="add"
                @click="isShow = 0"
                :class="{ active: isShow == 0 }"
              >
                短信随机码登录
              </li>
              <li @click="isShow = 1" :class="{ active: isShow == 1 }">
                服务密码登录
              </li>
            </ul>
            <ul class="tabsContent">
              <!-- 短信随机码登录 -->
              <li class="shortMessage">
                <p>
                  <input
                    class="txt"
                    placeholder="请输入手机号码"
                    v-model="phone"
                    name="phone"
                    v-validate="{ required: true, regex: /^1\d{10}$/ }"
                    :class="{ invalid: errors.has('phone') }"
                  />
                  <span class="error-msg">{{ errors.first("phone") }}</span>
                </p>
                <p>
                  <input
                    placeholder="请输入短信验证码"
                    class="txt2"
                    v-model="code"
                    name="code"
                    v-validate="{ required: true, regex: /^\d{6}$/ }"
                    :class="{ invalid: errors.has('code') }"
                  />
                  <span class="error-msg">{{ errors.first("code") }}</span>
                  <span class="line">|</span>
                  <span
                    class="getShortMes1"
                    @click="getShortMes"
                    v-show="!isSendCode"
                    >获取短信验证码</span
                  >
                  <span class="getShortMes_time" v-show="isSendCode"
                    >{{ timeout }}s后重新获取</span
                  >
                </p>
                <p v-show="isShow === 1">
                  <input
                    type="password"
                    placeholder="请输入服务密码"
                    class="txt4"
                    v-model="password"
                    name="password"
                    v-validate="{ required: true, regex: /^\w{6,20}$/ }"
                    :class="{ invalid: errors.has('password') }"
                  />
                  <span class="error-msg">{{ errors.first("password") }}</span>

                  <i>忘记密码，请咨询10086</i>
                </p>

                <button class="login" @click="Login">登录</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShow: 0,
      phone: "",
      password: "",
      code: "",
      isCode: "",
      isSendCode: false,
      timeout: 30,
    };
  },
  methods: {
    async Login() {
      if (!this.isShow && (!this.phone || !this.code)) {
        this.$message.error("请输入手机号或验证码");
        return;
      } else if (this.isShow && (!this.password || !this.code)) {
        this.$message.error("请输入验证码或登录密码!");
        return;
      } else if (this.code != this.isCode) {
        this.$message.error("验证码输入错误!");
        return;
      }

      if (this.phone && this.password && this.code) {
        try {
          const result = await this.$API.login.reqLogin({
            username: this.phone,
            password: this.password,
          });
          if (result.code === 200) {
            let token = result.data.token;
            localStorage.setItem("token", token);
            this.$message.success("恭喜登录成功");
            this.$router.push("/home");
            return;
          } else {
            this.$message.error(`${result.data}`);
            return;
          }
        } catch (error) {
          console.log(error.message);
          return;
        }
      }

      try {
        const result = await this.$API.login.reqLogin({
          username: this.phone,
          password: "123456",
        });
        if (result.code === 200) {
          let token = result.data.token;
          let phone = result.data.userInfo.nickName;
          localStorage.setItem("token", token);
          sessionStorage.setItem("phone", phone);
          this.$message.success("恭喜登录成功");
          this.$router.push("/home");
          return;
        } else {
          this.$message.error(`${result.data}`);
          return;
        }
      } catch (error) {
        console.log(error.message);
        return;
      }
    },
    //发送验证码
    async getShortMes() {
      if (this.phone === "") {
        this.$message.error("请输入手机号码");
        return;
      }
      //生成随机6位数字作为验证码
      this.isCode = Math.floor((Math.random() * 9 + 1) * 100000);
      console.log(this.isCode);
      //改变验证码发送状态
      this.isSendCode = true;
      const result = await this.$API.login.reqCode({
        isCode: this.isCode,
        phone: this.phone,
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
  },
};
</script>

<style lang="less" scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
}
.app {
  .headerCenter {
    width: 1200px;
    height: 160px;
    margin: 0 auto;
    position: relative;
    .logo {
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      .back {
        position: absolute;
        right: 0;
        bottom: 30px;
        color: #666;
      }
    }
  }
  .loginPage {
    width: 100%;
    .content {
      background: url("./images/bg.51062a9.jpg");
      width: 1486px;
      height: 706px;
      width: 100%;
      .contentCenter {
        width: 1200px;
        height: 706px;
        margin: 0 auto;
        position: relative;
        img {
          margin-top: 100px;
        }
        .tabs {
          position: absolute;
          top: 80px;
          right: 0;
          margin: 10px 0;
          background-color: #fff;
          width: 396px;
          height: 516px;
          padding: 50px 36px 0;

          .tabsTitle {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 28px;
            font-weight: bold;
            font-size: 20px;

            .active {
              color: #e3007e;
            }
          }
          .tabsContent .shortMessage .txt {
            width: 379px;
            height: 54px;
            border-radius: 4px;
            border: 1px solid #ddd;
            outline: none;
            display: block;
            font-size: 15px;
            font-weight: 400;
            padding: 0 0 0 15px;
            margin-top: 30px;
          }
          .tabsContent .shortMessage .txt2 {
            width: 379px;
            height: 54px;
            border-radius: 4px;
            border: 1px solid #ddd;
            outline: none;
            display: block;
            font-size: 15px;
            font-weight: 400;
            padding: 0 0 0 15px;
            margin-top: 10px;
          }
          .tabsContent2 .servePassword .txt3 {
            width: 379px;
            height: 54px;
            border-radius: 4px;
            border: 1px solid #ddd;
            outline: none;
            display: block;
            font-size: 15px;
            font-weight: 400;
            padding: 0 0 0 15px;
            margin-top: 30px;
          }
          .tabsContent .shortMessage .txt4 {
            width: 379px;
            height: 54px;
            border-radius: 4px;
            border: 1px solid #ddd;
            outline: none;
            display: block;
            font-size: 15px;
            font-weight: 400;
            padding: 0 0 0 15px;
            margin-top: 10px;
          }
          .tabsContent2 .servePassword .txt5 {
            width: 379px;
            height: 54px;
            border-radius: 4px;
            border: 1px solid #ddd;
            outline: none;
            display: block;
            font-size: 15px;
            font-weight: 400;
            padding: 0 0 0 15px;
            margin-top: 10px;
          }
          .tabsContent2 .servePassword .line2 {
            width: 1px;
            height: 11px;
            color: #d8d8d8;
            position: absolute;
            top: 299px;
            right: 140px;
          }
          .tabsContent2 .servePassword .login2 {
            width: 396px;
            height: 56px;
            font-size: 24px;
            background-color: #e3007c;
            border-radius: 4px;
            border: 0;
            color: #fff;
            line-height: 56px;
            letter-spacing: 2px;
            margin: 63px 0 0;
            cursor: pointer;
            outline: none;
          }
          .tabsContent2 .servePassword .getShortMes {
            width: 99px;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            padding: 18px 21px 18px 20px;
            position: absolute;
            top: 285px;
            right: 25px;
            cursor: pointer;
          }
          .tabsContent2 .servePassword .getShortMes_time {
            width: 99px;
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            line-height: 20px;
            display: block;
            padding: 18px 21px 18px 20px;
            position: absolute;
            top: 285px;
            right: 25px;
            cursor: pointer;
            color: #666;
          }
          .tabsContent .shortMessage .line {
            width: 1px;
            height: 11px;
            color: #d8d8d8;
            position: absolute;
            top: 215px;
            right: 140px;
          }
          .tabsContent .shortMessage .getShortMes1 {
            width: 99px;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            padding: 18px 21px 18px 20px;
            position: absolute;
            top: 200px;
            right: 25px;
            cursor: pointer;
          }
          .tabsContent .shortMessage .getShortMes_time {
            width: 99px;
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            padding: 18px 21px 18px 20px;
            position: absolute;
            top: 200px;
            right: 25px;
            cursor: pointer;
            color: #666;
          }
          .tabsContent .shortMessage .login {
            width: 396px;
            height: 56px;
            font-size: 24px;
            background-color: #e3007c;
            border-radius: 4px;
            border: 0;
            color: #fff;
            line-height: 56px;
            letter-spacing: 2px;
            margin: 63px 0 0;
            cursor: pointer;
            outline: none;
          }

          span {
            color: #dc007c;
            font-size: 12px;
            font-weight: 400;
            padding: 5px 15px 0;
          }
          i {
            font-style: normal;
            font-size: 12px;
            color: #4a4343;
            float: right;
            margin: 5px 0;
          }
          li {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
