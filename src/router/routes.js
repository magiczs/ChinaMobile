import Search from "@/pages/Search";

export default [
  // 路由对象
  {
    path: "/search",
    component: Search,
  },
  // 特殊路由 重定向
  {
    path: "/",
    redirect: "/search",
  },
];
