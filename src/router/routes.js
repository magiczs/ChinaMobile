const Home = () => import("../pages/Home");
const Trade = () => import("../pages/Trade");

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
    path: "/",
    redirect: "/trade",
  },
];
