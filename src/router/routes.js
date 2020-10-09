const Home = () => import("../pages/Home");
const Trade = () => import("../pages/Trade");
const Pay = () => import("../pages/Pay");
const PaySuccess = () => import("../pages/PaySuccess");

export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/trade",
    component: Trade,
  },
  {
    path: "/pay",
    component: Pay,
    name: "pay",
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
  },
  {
    path: "/",
    redirect: "/trade",
  },
];
