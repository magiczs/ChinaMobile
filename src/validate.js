//引入插件并且声明使用
import Vue from "vue";
import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

//验证信息本地化
import zh_CN from "vee-validate/dist/locale/zh_CN"; // 引入中文message
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
  },
  attributes: {
    // 给校验的field属性名映射中文名称
    // phone: "手机号",
    code: "验证码",
    password: "密码",
  },
});
