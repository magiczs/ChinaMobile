const Login = () => import("../pages/Login");
const Home = () => import("../pages/Home");
const Search = () => import("../pages/Search");
const Detail = () => import("../pages/Detail");
// import Login from "@/pages/Login";
// import Home from "@/pages/Home";
// import Search from "@/pages/Search";
// import Detail from "@/pages/Detail";
const Trade = () => import("../pages/Trade");
const Pay = () => import("../pages/Pay");
const PaySuccess = () => import("../pages/PaySuccess");
export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    component: Login,
    meta: {
      isHide: true,
    },
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("phone")) {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/Search:keyword?",
    name: "search",
    component: Search,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/trade",
    component: Trade,
    name: "trade",
    meta: {
      noHeader: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path === "/detail") {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/pay/:orderId?",
    component: Pay,
    name: "pay",
    meta: {
      noHeader: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") {
        next();
      } else {
        next("/");
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    name: "paysuccess",
    meta: {
      noHeader: true,
    },
    beforeEnter: (to, from, next) => {
      let phone = sessionStorage.getItem("phone");
      if (to.query.orderNo && phone) {
        next();
      } else {
        next("/");
      }
    },
  },
];
