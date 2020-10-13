import Login from "../pages/Login";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import { search } from "../api";
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
  },
  {
    path: "/Search:keyword?",
    name:"search",
    component: Search,
  },
];
