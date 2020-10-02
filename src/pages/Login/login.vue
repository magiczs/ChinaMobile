<template>
  <div class="app">
    <div class="loginPage">
      <div class="header">
        <div class="headerCenter">
          <div class="logo">
            <img src="./images/logo230x42.30b1340.png" alt="" />
            <p class="back">返回</p>
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
                @click="changeTab(0)"
                :class="{ active: isShow == 0 }"
              >
                短信随机码登录
              </li>
              <li @click="changeTab(1)" :class="{ active: isShow == 1 }">
                服务密码登录
              </li>
              <!-- <li @click="changeTab(2)" :class="{ active: isShow == 2 }">
                服务密码登录
              </li> -->
            </ul>
            <ul class="tabsContent" v-if="isShow == 0">
              <!-- 短信随机码登录 -->
              <li class="shortMessage">
                <p>
                  <input type="text" placeholder="请输入手机号码" class="txt" />
                  <span>请输入手机号码</span>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="请输入短信验证码"
                    class="txt2"
                  />
                  <span>请输入验证码</span>
                  <span class="line">|</span>
                  <span class="getShortMes1">获取短信验证码</span>
                </p>
                <button class="login">登录</button>
              </li>
            </ul>
            <ul v-else-if="isShow == 1" class="tabsContent2">
              <!-- 服务密码登录 -->
              <li class="servePassword">
                <p>
                  <input
                    type="text"
                    placeholder="请输入手机号码"
                    class="txt3"
                  />
                  <span>请输入手机号码</span>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="请输入服务密码"
                    class="txt4"
                  />
                  <span>请输入服务密码</span>
                  <i>忘记密码，请咨询10086</i>
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="请输入短信验证码"
                    class="txt5"
                  />
                  <span>请输入验证码</span>
                  <span class="line2">|</span>
                  <span class="getShortMes">获取短信验证码</span>
                  <button class="login2">登录</button>
                </p>
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
    };
  },
  methods: {
    changeTab(flag) {
      // console.log(111);
      this.isShow = flag;
    },
  },
};
</script>

<style lang="less" scoped>
.active {
  color: #e3007e;
}
* {
  list-style: none;
  padding: 0;
  margin: 0;
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
      }
    }
  }
  .loginPage {
    .content {
      background: url("./images/bg.51062a9.jpg");
      width: 1486px;
      height: 706px;
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
              color: blue;
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
          .tabsContent2 .servePassword .txt4 {
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
