import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue")
  },
  {
    path: "/dictionary",
    name: "Dictionary",
    component: () => import("../views/Dictionary.vue")
  },
  {
    path: "/practice",
    name: "Practice",
    component: () => import("../views/Practice.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
