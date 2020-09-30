import Detail from "../pages/Detail";

const routes = [
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/",
    redirect: "/detail",
  },
];
export default routes;
