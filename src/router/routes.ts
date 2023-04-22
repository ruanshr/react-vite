import { LazyComponent } from "./lazyComponent";
import { Home, About, Login, NotFount, Account } from "../pages";
export default [
  {
    path: "/",
    meta: { title: "首页", isLogin: true, isMenu: true },
    component: Home,
  },
  {
    path: "/account",
    meta: { title: "客户信息", isLogin: true, isMenu: true },
    component: Account,
    children: [
      { path: "list", meta: { title: "客户列表" }, component: LazyComponent({ path: "../pages/Account/List" }) },
      { path: "form", meta: { title: "客户表单" }, component: LazyComponent({ path: "../pages/Account/Form" }) },
    ]
  },
  {
    path: "/about",
    meta: { title: "关于我们", isMenu: true },
    component: About,
  },
  {
    path: "/login",
    meta: { title: "登录", isMenu: true },
    component: Login,
  },
  {
    path: "*",
    meta: { title: "404", isMenu: true },
    component: NotFount,
  },
];
